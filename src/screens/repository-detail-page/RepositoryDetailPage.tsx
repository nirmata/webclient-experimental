import { createPublication, publish } from "pusu";
import {
  BreadcrumbLink,
  PageHeader,
  PageHeaderContainer,
  RepoStatus,
  Tabs,
} from "../../components/componentsV2";
import { Findings } from "../../components/repository-findings-table";
import { Files } from "../../components/repository-files-table";
import { useEffect, useState } from "react";
import { TRepositoriesResponse } from "../../components/repository-table";

const tabsList = [
  { id: 0, label: "Findings", content: <Findings /> },
  { id: 1, label: "Files", content: <Files /> },
];

export type TLastScanTime = {
  createdOn: number;
};

export type TGitRepoBranchesRes = {
  entries: TGitRepoBranches[];
  total: number;
};

export type TGitRepoBranches = {
  value: string;
  label: string;
  _id: TGitRepoBranchesId;
  result: TGitRepoBranchesResult;
};

export type TGitRepoBranchesId = {
  branch: string;
};

export type TGitRepoBranchesResult = {
  pass?: number;
  fail?: number;
};

const tabItems = tabsList.map((item) => {
  const { id, label } = item;
  const key = String(id + 1);
  const children = tabsList[item.id].content;
  return { key, label, children };
});

export const getTimeAgo = (input: TLastScanTime[]): string => {
  if (!input.length) return "1 second ago";

  const currentTime = new Date().getTime();

  // Assuming the input array contains only one object for simplicity
  const timestamp = input?.[0]?.createdOn;
  const timeDifference = currentTime - timestamp;

  // Convert milliseconds to seconds, minutes, hours, days, and months
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (weeks > 0) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  }
};

export const fetchRepoBranchFindingsPub = createPublication<{
  currentTab: string;
  branchName: string;
}>();

const RepositoryDetailPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  // const [{ data: gitRepoBranchesData }, { onLoad: gitRepoBranchesOnload }] =
    // useQuery<TGitRepoBranchesRes>();
    const [gitRepoBranchesData, setGitRepoBranchesData] = useState<TGitRepoBranchesRes>();
  // const [
  //   { data: repositoryData, loading: repositoryLoading },
  //   { onLoad: onRepositoryData },
  // ] = useQuery<TRepositoriesResponse>();
  const [repositoryData, setRepositoryData] = useState<TRepositoriesResponse>();
  let grade,
    files = 0,
    passed,
    failed;
  if (repositoryData) {
    grade = repositoryData?.entries?.[0]?.grade ?? "";
    Object.keys(repositoryData?.entries?.[0]?.["resource-id"] ?? {}).map(
      (key) => {
        files = files + repositoryData?.entries?.[0]?.["resource-id"]?.[key];
      }
    );
    passed = repositoryData?.entries?.[0]?.result.pass ?? "";
    failed = repositoryData?.entries?.[0]?.result.fail ?? "";
  }
  const repo = 'https://github.com/dtoledo67/payment-service.git';
  const urlInfo =
    repo?.split("https://")?.[1]?.split("/")?.pop()?.split(".")?.[0] ?? "";
  const gitRepoBranchNamesOptions = gitRepoBranchesData?.entries?.map(
    (item: TGitRepoBranches) => ({
      label: item?.label ?? "",
      value: item?.value ?? "",
    })
  );

  gitRepoBranchNamesOptions?.push({
    label: "All Branches",
    value: "",
  });

  const getGitRepoBranchesData = async () => {
    // gitRepoBranchesOnload(
     const url= `http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.git.policies.nirmata.io/branch&filter=labels.policies.nirmata.io/source-id,eq,${repo}`
    // );
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGitRepoBranchesData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getRepoStats = async (branchName?: string) => {
    const queryParams = [
      "filter=labels.policies.nirmata.io/source-type,eq,git-repository",
      "groupby=labels.policies.nirmata.io/source-id",
      "impact=labels.policies.nirmata.io/resource-type,labels.policies.nirmata.io/resource-id",
      "grade=true",
      `filter=labels.policies.nirmata.io/source-id,eq,${repo}`,
      branchName
        ? `filter=labels.policies.nirmata.io/branch,eq,${branchName}`
        : null,
    ];

    const url = `http://localhost:9010/policies/api/policyResultsSummary?${queryParams
      .filter(Boolean)
      .join("&")}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRepositoryData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (value: string) => {
    getRepoStats(value);
    publish(fetchRepoBranchFindingsPub, { currentTab: "1", branchName: value });
  };

  const changeTabs = (activeKey: string) => {
    setActiveTab(activeKey);
  };

  useEffect(() => {
    async function loadData() {
      await getGitRepoBranchesData();
      getRepoStats();
    }
    loadData();
  }, []);

  const initialBranch = 'dev';
  return (
    <>
      <PageHeaderContainer>
        <BreadcrumbLink
          items={[
            {
              title: "Policy Reports - Repositories",
              href: "#clustersPolicyReport/repositories",
            },
          ]}
        />
        <PageHeader
          title={urlInfo ?? ""}
          url={repo ?? ""}
          onScanRefresh={''}
          variant="REPOSITORIES"
          defaultValue={initialBranch}
          branchNameOptions={gitRepoBranchNamesOptions}
          onBranchNameChange={handleChange}
        />
        <RepoStatus
          passed={Number(passed ?? 0)}
          failed={Number(failed ?? 0)}
          files={Number(files ?? 0)}
          grade={grade ?? ""}
          lastScanTime={"lastScanTime"}
        />
      </PageHeaderContainer>
      <Tabs
        activeKey={activeTab}
        size="large"
        onChange={changeTabs}
        items={tabItems}
      />
    </>
  );
};

export default RepositoryDetailPage;
