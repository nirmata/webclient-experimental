export interface Summary {
  fail: number;
  pass: number;
  warn: number;
  error: number;
  skip: number;
  remediation: number;
  policies: number;
  totalRules: number;
}

export interface SummaryByCategory {
  report: CategorySummary[];
}

export interface CategorySummary {
  failCount: number;
  totalCount: number;
  category: string;
  failPercentage: number;
}

export interface RepoByProvider {
  githubFailCount: number;
  githubTotalCount: number;
  bitBucketFailCount: number;
  bitBucketTotalCount: number;
  gitlabFailCount: number;
  gitlabTotalCount: number;
}

export interface RepoViolation {
  failCount: number;
  sourceId: string;
  totalCount: number;
  failPercentage: number;
}

export interface ClusterCompliance {
  _id: string;
  passCount: number;
  totalCount: number;
  passPercentage: number;
}

export interface NamespaceCompliance {
  _id: string;
  passCount: number;
  totalCount: number;
  passPercentage: number;
}

export interface SummaryByCategoryForRepository {
  report: CategorySummary[];
}

export interface CloudProviderViolations {
  [provider: string]: {
    failCount: number;
    totalCount: number;
  };
}

export interface TotalNamespaceCompliance {
  totalPass: number;
  totalCount: number;
  passPercentage: number;
}

export interface NamespaceViolations {
  [namespace: string]: {
    [subNamespace: string]: {
      failCount: number;
      totalCount: number;
    };
  };
}

export interface ComplianceByStandardInOrder {
  _id: string;
  passCount: number;
  totalCount: number;
  passPercentage: number;
}

export interface ClusterNamespace {
  namespace: string | null;
  failCount: number;
  totalCount: number;
  namespaceId?: string;
  namespacePoliciesUid?: string;
}

export interface Cluster {
  violations: number;
  clusterId: string;
  namespaces: ClusterNamespace[];
}

export interface TotalClusterCompliance {
  totalPass: number;
  totalCount: number;
  passPercentage: number;
}

export interface MModernDashboardData {
  summary: Summary;
  summaryByCategoryForCluster: SummaryByCategory;
  "all-namespace-violation-percentage": number;
  "repo-by-provider": RepoByProvider;
  repoVoilationInOrder: RepoViolation[];
  clusterComplianceInOrder: ClusterCompliance[];
  NamespaceComplianceInOrder: NamespaceCompliance[];
  summaryByCategoryForRepository: SummaryByCategoryForRepository;
  "cloud provider violations": CloudProviderViolations;
  totalNamespaceCompliance: TotalNamespaceCompliance[];
  "all-cluster-violation-percentage": number;
  "all-repo-violation-percentage": number;
  "namespace-violations": NamespaceViolations;
  ComplianceByStandardInOrder: ComplianceByStandardInOrder[];
  clusters: {
    [clusterName: string]: Cluster;
  };
  totalClusterCompliance: TotalClusterCompliance[];
}

export type IconType = JSX.Element;

export interface MetricEntry {
  title: string;
  value: string;
  textColor?: string;
  icon: IconType;
  link?: string;
}

export type SegmentItem = {
  name: string;
  icon: IconType;
  progressPercent: number;
  value?: string;
  link?: string;
};

export type ViolationItems = {
  clusters: number;
  clusterItems: SegmentItem[];
  clusterLink?: string;
  repositories?: number;
  repositoryItems?: SegmentItem[];
  repoLink?: string;
  isLoading?: boolean;
};

export type NamespaceItems = {
  clusters: number;
  clusterItems: SegmentItem[];
  clusterLink?: string;
  repoLink?: string;
  isLoading?: boolean;
};

export type ClustersRepos = ViolationItems & {
  namespaces: NamespaceItems;
  selectedCluster?: NamespaceItems;
  isLoading?: boolean;
};

export type segmentItemsMap = {
  [key: string]: ViolationItems & Partial<ClustersRepos>;
};

export type ViolationItemsMap = {
  services: ViolationItems;
  clustersrepos: ClustersRepos;
  policycategories: ViolationItems;
};

export type ComplianceItemMap = {
  clustersreposcomp: ClustersRepos;
  compliancestandards: ViolationItems;
};

export type DashboardCardProps = {
  dataId: string;
  title: string;
  controlSegment: { label: JSX.Element; value: string }[];
  clusterNamespaceSegment: { label: JSX.Element; value: string }[];
  namespaceSegmentOptions: { label: string; value: string }[];
  segmentItemsMap: segmentItemsMap;
  defaultTab: string;
  selectedNamespaceOption: string;
  setSelectedNamespaceOption: React.Dispatch<React.SetStateAction<string>>;
  totalClusters?: number;
  totalRepositories?: number;
};

export type ClusterPolicyReportEntry = {
  _id?: {
    cluster?: string;
    namespace?: string;
  };
  resultCount: {
    pass: number;
    fail: number;
    warn: number;
    error: number;
    skip: number;
  };
  grade?: string;
  clusterName?: string;
  total: number;
  failPercentage: number;
  passPercentage: number;
  score: number;
  namespaceId?: string;
};
