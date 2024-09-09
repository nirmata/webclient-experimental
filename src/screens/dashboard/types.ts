import TMayBe from "../../components/connector/TMayBe";
import TClusterComplianceReport from "../../nirmata-model-schema/Cluster.TClusterComplianceReport";
import TNamespaceComplianceReport from "../../nirmata-model-schema/Policies.TNamespaceComplianceReport";
import TRepositoryComplianceReport from "../../nirmata-model-schema/Policies.TRepositoryComplianceReport";

export type TClusterComplianceReportData = {
  data?: TMayBe<TClusterComplianceReport[]>;
};
export type TNamespaceComplianceReportData = {
  data?: TMayBe<TNamespaceComplianceReport[]>;
};
export type TReportComplianceReportData = {
  data?: TMayBe<TRepositoryComplianceReport[]>;
};
export interface RepositoryBase {
  id: string;
  createdBy: string;
  name: string;
  description: string | null;
  gitUrl: string;
  organization: string | null;
  labels?: Record<string, string>;
  accessControlList?: {
    id: string;
  }[];
}
