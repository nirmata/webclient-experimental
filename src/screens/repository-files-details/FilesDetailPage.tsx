import {
  BreadcrumbLink,
  FileStatus,
  PageHeader,
  PageHeaderContainer,
  Tabs
} from '../../components/componentsV2';
import FilesFindings from '../../components/file-finding-table';
import {
  TGitRepoBranches,
  TGitRepoBranchesRes,
  TLastScanTime,
  getTimeAgo
} from '../repository-detail-page/RepositoryDetailPage';
import useQuery from '../../components/connector/use-query';
import { useEffect } from 'react';
import { createPublication, publish } from 'pusu';
import { useLocation } from 'react-router-dom';

export const fileDetailPageBranchPub = createPublication<{ branchName: string }>();

const tabsList = [
  { id: 0, label: 'Findings', content: <FilesFindings /> }
  // { id: 1, label: 'Policies', content: 'Policies' }
];

const tabItems = tabsList.map((item) => {
  const { id, label } = item;
  const key = String(id + 1);
  const children = tabsList[item.id].content;
  return { key, label, children };
});

type TFilesDetailsStats = {
  result: {
    fail?: number;
    pass?: number;
    warn?: number;
    skip?: number;
    error?: number;
  };
};

const FilesDetailPage = () => {
  const [{ data: lastScanData, loading: lastScanDataLoading }, { onLoad: onLoadLastScanData }] =
    useQuery<TLastScanTime[]>();
  const [{ data: gitRepoBranchesData }, { onLoad: gitRepoBranchesOnload }] = useQuery<TGitRepoBranchesRes>();
  const [{ data: fileStatsData }, { onLoad: onLoadFileStats }] = useQuery<{
    entries: TFilesDetailsStats[];
  }>();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const repoUrl = searchParams.get('repo');
  const severity = searchParams.get('severity')?.split(',') ?? [];
  const branch = searchParams.get('branch')?? '';

  const repoTitle = repoUrl?.split('https://')?.[1]?.split('/')?.pop()?.split('.')?.[0] ?? '';
  const fileName = searchParams.get('file') ?? '';
  const pass = fileStatsData?.entries?.[0]?.result.pass ?? 0;
  const fail = fileStatsData?.entries?.[0]?.result.fail ?? 0;
  const warn = fileStatsData?.entries?.[0]?.result.warn ?? 0;
  const skip = fileStatsData?.entries?.[0]?.result.skip ?? 0;
  const error = fileStatsData?.entries?.[0]?.result.error ?? 0;
  const gitRepoBranchNamesOptions = gitRepoBranchesData?.entries?.map((item: TGitRepoBranches) => ({
    label: item?._id?.branch ?? '',
    value: item?._id?.branch ?? ''
  }));

  gitRepoBranchNamesOptions?.push({
    label: 'All Branches',
    value: ''
  });

  let lastScanTime = '';
  if (!lastScanDataLoading && lastScanData) lastScanTime = getTimeAgo(lastScanData ?? []);

  const handleChange = (branchName: string) => {
    publish(fileDetailPageBranchPub, { branchName });
    getLastScanTime(branchName);
    getFileStats(branchName);
  };

  const getGitRepoBranchesData = () => {
    gitRepoBranchesOnload(
      `http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.git.policies.nirmata.io/branch&filter=labels.policies.nirmata.io/source-id,eq,${repoUrl}`
    );
  };

  const getLastScanTime = (branchName?: string) => {
    const labelSelector = [
      'policies.nirmata.io/source-type=git-repository',
      `policies.nirmata.io/source-id=${repoUrl}`
    ];

    if (branchName) labelSelector.push(`policies.nirmata.io/branch=${branchName}`);

    onLoadLastScanData(
      `/policies/api/PolicyReportResult?labelSelector=${labelSelector.join(
        ','
      )}&sort=createdOn,desc&count=1&fields=createdOn`
    );
  };

  const getFileStats = (branchName?: string) => {
    let url = `http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.policies.nirmata.io/resource-id&filter=labels.policies.nirmata.io/source-id,eq,${repoUrl}&paginate=true&start=0&count=10&sort=result.fail%2Cdesc&filter=labels.policies.nirmata.io/resource-id,eq,${fileName}`;

    if (branchName) {
      url = `${url}&filter=labels.policies.nirmata.io/branch,eq,${branchName}`;
    }

    onLoadFileStats(url);
  };

  useEffect(() => {
    getLastScanTime();
    getGitRepoBranchesData();
    getFileStats();
  }, []);

  return (
    <>
      <PageHeaderContainer>
        <BreadcrumbLink
          items={[
            {
              title: 'Policy Reports - Repositories',
              href: '#clustersPolicyReport/repositories'
            },
            {
              title: repoTitle,
              href: `#clusters/policyReport/repositoryDetails?repo=${repoUrl}${severity && severity.length > 0 ? `&severity=${severity.join(',')}` : ''}${branch && branch.length > 0 ? `&branch=${branch}` : ''}`

            }            
          ]}
        />
        <PageHeader
          title={fileName}
          url={repoUrl ?? ''}
          variant='FILE'
          defaultValue={branch}
          branchNameOptions={gitRepoBranchNamesOptions}
          onBranchNameChange={handleChange}
        />
        <FileStatus
          passed={pass}
          warning={warn}
          failed={fail}
          error={error}
          skipped={skip}
          lastScanTime={lastScanTime}
        />
      </PageHeaderContainer>
      <Tabs size='large' items={tabItems} />
    </>
  );
};

export default FilesDetailPage;
