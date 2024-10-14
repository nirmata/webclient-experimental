import { IconType, segmentItemsMap } from "../types";
import { ResourceKindTag } from "../../policy-report/resource-kind-tag";
import { FileProtectOutlined, DeploymentUnitOutlined } from "@ant-design/icons";

export const getPercent = (
  segmentItemsMap: segmentItemsMap,
  selectedSegment: string,
  selectedNamespaceSegment: string,
  selectedNamespaceOption: string
): number => {
  if (selectedNamespaceSegment === "clusters") {
    return segmentItemsMap[selectedSegment]?.clusters ?? 0;
  }
  if (selectedNamespaceOption !== "All Clusters") {
    return segmentItemsMap[selectedSegment]?.selectedCluster?.clusters ?? 0;
  }
  return segmentItemsMap[selectedSegment]?.namespaces?.clusters ?? 0;
};

export const getLabelForSelectedNamespace = (
  selectedKey: string,
  namespaceSegmentOptions: { label: string; value: string }[]
): string => {
  const selectedOption = namespaceSegmentOptions.find(
    (option) => option.value === selectedKey
  );
  return selectedOption ? selectedOption.label : "All Clusters";
};

export const getLabel = (
  selectedNamespaceSegment: string,
  selectedNamespaceOption: string,
  title: string,
  namespaceSegmentOptions: { label: string; value: string }[]
): string => {
  if (
    selectedNamespaceSegment === "clusters" ||
    selectedNamespaceOption === ""
  ) {
    return "Clusters - All";
  }
  if (
    selectedNamespaceSegment === "namespaces" &&
    selectedNamespaceOption !== "All Clusters"
  ) {
    return getLabelForSelectedNamespace(
      selectedNamespaceOption,
      namespaceSegmentOptions
    );
  }
  return title === "Compliance" ? "Clusters - All" : "Namespaces - All";
};

export const getIcon = (
  selectedNamespaceSegment: string,
  selectedNamespaceOption: string,
  title: string
): IconType => {
  if (
    selectedNamespaceSegment === "namespaces" &&
    selectedNamespaceOption === "All Clusters"
  ) {
    return title !== "Compliance" ? (
      <ResourceKindTag
        kind={"namespace"}
        style={{ color: "#00000073", height: "22px", width: "30px" }}
      />
    ) : (
      <FileProtectOutlined
        style={{ width: "20px", height: "20px", color: "#1677FF" }}
      />
    );
  }
  return title === "Compliance" ? (
    <FileProtectOutlined
      style={{ width: "20px", height: "20px", color: "#1677FF" }}
    />
  ) : (
    <DeploymentUnitOutlined
      style={{ width: "20px", height: "20px", color: "#1677FF" }}
    />
  );
};

export const getLink = (
  segmentItemsMap: segmentItemsMap,
  selectedSegment: string,
  selectedNamespaceSegment: string,
  selectedNamespaceOption: string
): string | undefined => {
  if (
    selectedNamespaceOption !== "All Clusters" &&
    selectedNamespaceOption !== ""
  ) {
    return segmentItemsMap[selectedSegment]?.selectedCluster?.clusterLink;
  }
  if (
    selectedNamespaceSegment === "namespaces" &&
    selectedNamespaceOption === "All Clusters"
  ) {
    return segmentItemsMap[selectedSegment]?.namespaces?.clusterLink;
  }
  return segmentItemsMap[selectedSegment]?.clusterLink;
};
