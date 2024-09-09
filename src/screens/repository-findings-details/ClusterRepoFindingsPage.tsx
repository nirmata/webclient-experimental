import styled from 'styled-components';
import { BreadcrumbLink, PageHeader, PageHeaderContainer, SeverityTagVariant } from './../../components/componentsV2';
// import { HeaderDescription } from './../../../nirmata-lego/components/tfc/componentsV2/PageDescription';
import { ImpactedResources, InfoCards ,extractRepoName} from '../../components/repo-findings';
import { Collapse, Divider } from 'antd';
import useQuery from '../../components/connector/use-query';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { TRepositoryFindingsResponse } from '../../components/repository-findings-table';
import { TImpactedResourceResponse } from '../../components/repo-findings/types';


const ClusterRepoFindingsPage = () => {
  const [breadcrumbItems, setBreadcrumbItems ]= useState<{href: string, title: string}[]>( [
    { href: '#clustersPolicyReport/repositories', title: 'Policy Reports - Repositories' },
  ]);
  const {search}=useLocation();
  const urlSearchParams = new URLSearchParams(search);
  const repo = urlSearchParams.get('repo');
  const policy = urlSearchParams.get('policy');
  const rule = urlSearchParams.get('rule');
  const severity = urlSearchParams.get('severity') as SeverityTagVariant;
  const [{ data }, { onLoad }] = useQuery<TImpactedResourceResponse>();
  const message = urlSearchParams.get('message');

  // const [{data:impactedResourceData},{onLoad:OnLoadImpactedResources}]= useQuery<TImpactedResourceResponse>();

  useEffect(()=>{
    onLoad(`/policies/api/PolicyReportResult?filter=rule,eq,${rule}&filter=policy,eq,${policy}&filter=severity,eq,${severity}&labelSelector="policies.nirmata.io/source-type=git-repository,policies.nirmata.io/source-id=${repo}"&paginate=true`);
    // OnLoadImpactedResources(`policies/api/PolicyReportResult?filter=policy,eq,${policy}&filter=rule,eq,${rule}&filter=severity,eq,${severity}&labelSelector="policies.nirmata.io/source-type=git-repository,policies.nirmata.io/source-id=${repo}"`)
    setBreadcrumbItems([...breadcrumbItems, { href:`#clusters/policyReport/repositoryDetails?repo=${repo}`  , title: extractRepoName(repo??'')??'' } ])
  },[])

  return (
    <>
      <PageHeaderContainer>
        <BreadcrumbLink items={breadcrumbItems} />
        <PageHeader
          title={message??''}
          variant="FINDING"
          tag={severity}
        />
        {/* <HeaderDescription
          text="Description of the cluster-repo critical finding which can be really long, but we have the space and can make
it multi-line as needed "
        /> */}
      </PageHeaderContainer>

      <StyledDivider>
        <Divider />
      </StyledDivider>

      <StyledCollapse>
        <Collapse
          size="small"
          items={[{ key: '1', label: 'Info', children: <InfoCards data={data?data:{} as TImpactedResourceResponse} /> }]}
          defaultActiveKey={['1']}
        />
        <Collapse
          size="small"
          items={[{ key: '1', label: 'Impacted Files', children: <ImpactedResources /> }]}
          defaultActiveKey={['1']}
        />
      </StyledCollapse>
    </>
  );
};

const StyledCollapse = styled.div`
  padding: 1rem;

  .ant-collapse,
  .ant-collapse-item {
    border: none;

    .ant-collapse-header-text {
      font-weight: 600;
    }

    .ant-collapse-content{
      border-top: 1px solid transparent;
      &.ant-collapse-content-active{
      .ant-collapse-content-box {
        padding: 0;
      }
    }
    }
  }
`;

const StyledDivider = styled.div`
  margin-bottom: 0;
`;

export default ClusterRepoFindingsPage;
