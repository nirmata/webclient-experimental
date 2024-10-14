import { useState } from "react";
import {
  ClustersRepos,
  DashboardCardProps,
  SegmentItem,
  ViolationItems,
} from "../types";
import { Divider, Dropdown, Segmented, Skeleton, Space } from "antd";
import DataTestId from "../../data-test-id";
import {
  DatabaseOutlined,
  DownOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import If from "../../if";
import ProgressItem from "./progress-item";
import ProgressCircleWithLabel from "./progress-circle-with-label";
import { getIcon, getLabel, getLink, getPercent } from "../utils/util";

const DashboardCard: React.FC<DashboardCardProps> = ({
  dataId,
  title,
  controlSegment,
  clusterNamespaceSegment,
  namespaceSegmentOptions,
  segmentItemsMap,
  defaultTab,
  selectedNamespaceOption,
  setSelectedNamespaceOption,
  totalClusters,
  totalRepositories,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<string>(defaultTab);
  const [selectedNamespaceSegment, setSelectedNamespaceSegment] =
    useState<string>("clusters");
  const menuItems = namespaceSegmentOptions.map((option) => ({
    key: option.value,
    label: option.label,
  }));

  const getLabelForSelectedNamespace = (selectedKey: string) => {
    const selectedOption = namespaceSegmentOptions.find(
      (option) => option.value === selectedKey
    );
    return selectedOption ? selectedOption.label : "All Clusters";
  };

  const handleControlSegmentChange = (value: string) => {
    setSelectedSegment(value);
    setSelectedNamespaceSegment("clusters");
    setSelectedNamespaceOption("");
  };

  const handleClustersSegmentChange = (value: string) => {
    setSelectedNamespaceSegment(value);
    setSelectedNamespaceOption("All Clusters");
  };

  const handleNamespaceSelectChange = (info: any) => {
    const selectedValue = info.key;
    setSelectedNamespaceOption(selectedValue);
  };

  const displayClusterItems = (): SegmentItem[] => {
    const clustersReposSegments = ["clustersrepos", "clustersreposcomp"];
    const violationSegments = [
      "services",
      "policycategories",
      "compliancestandards",
    ];

    if (clustersReposSegments.includes(selectedSegment)) {
      const clustersRepos = segmentItemsMap[selectedSegment] as ClustersRepos;

      if (selectedNamespaceSegment === "namespaces") {
        return selectedNamespaceOption === "All Clusters"
          ? clustersRepos?.namespaces?.clusterItems || []
          : clustersRepos?.selectedCluster?.clusterItems || [];
      }

      return clustersRepos?.clusterItems || [];
    }

    if (violationSegments.includes(selectedSegment)) {
      const violationItems = segmentItemsMap[selectedSegment] as ViolationItems;
      return violationItems?.clusterItems || [];
    }

    return [];
  };

  return (
    <div>
      <DataTestId value={dataId}>
        {() => (
          <div
            style={{
              display: "flex",
              padding: "8px 16px",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "8px",
              borderRadius: "8px",
              background: "#F5F5F5",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                }}
              >
                <SegmentedWrapper>
                  <Segmented
                    options={controlSegment}
                    onChange={(value) =>
                      handleControlSegmentChange(value as string)
                    }
                    style={{ background: "none" }}
                  />
                </SegmentedWrapper>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "50.5%",
                gap: "8px",
                justifyContent: "space-between",
              }}
            >
              {selectedSegment === "clustersrepos" ||
              selectedSegment === "clustersreposcomp" ? (
                <>
                  <SegmentedWrapper>
                    <Segmented
                      options={clusterNamespaceSegment}
                      onChange={(value) =>
                        handleClustersSegmentChange(value as string)
                      }
                      style={{ background: "none", height: "24px" }}
                    />
                  </SegmentedWrapper>
                  {selectedNamespaceSegment === "namespaces" && (
                    <Dropdown
                      trigger={["click"]}
                      menu={{
                        items: menuItems,
                        onClick: handleNamespaceSelectChange,
                      }}
                    >
                      <a
                        onClick={(e) => e.preventDefault()}
                        style={{ cursor: "pointer" }}
                      >
                        <Space>
                          {getLabelForSelectedNamespace(
                            selectedNamespaceOption
                          )}
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  )}
                </>
              ) : (
                <div style={{ height: "24px" }} />
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <If
                condition={
                  selectedNamespaceOption !== "All Clusters"
                    ? segmentItemsMap[selectedSegment]?.selectedCluster
                        ?.isLoading ?? false
                    : segmentItemsMap[selectedSegment]?.isLoading ?? false
                }
              >
                <If.True>
                  <Skeleton
                    active
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                    }}
                  />
                </If.True>
                <If.False>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                    }}
                  >
                    <ProgressCircleWithLabel
                      percent={getPercent(
                        segmentItemsMap,
                        selectedSegment,
                        selectedNamespaceSegment,
                        selectedNamespaceOption
                      )}
                      label={getLabel(
                        selectedNamespaceSegment,
                        selectedNamespaceOption,
                        title,
                        namespaceSegmentOptions
                      )}
                      icon={getIcon(
                        selectedNamespaceSegment,
                        selectedNamespaceOption,
                        title
                      )}
                      selectedNamespaceSegment={selectedNamespaceSegment}
                      selectedNamespaceOption={getLabelForSelectedNamespace(
                        selectedNamespaceOption
                      )}
                      link={getLink(
                        segmentItemsMap,
                        selectedSegment,
                        selectedNamespaceSegment,
                        selectedNamespaceOption
                      )}
                      total={totalClusters}
                      title={title}
                    />
                    <div
                      style={{
                        display: "flex",
                        padding: "8px 16px 0px 16px",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "8px",
                        background:
                          "linear-gradient(0deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.03) 100%), #FFF",
                        height: "204px",
                      }}
                    >
                      {displayClusterItems()?.map((item, index) => (
                        <ProgressItem
                          key={index}
                          name={item.name}
                          icon={item.icon}
                          progressPercent={item.progressPercent}
                          value={item.value ?? "0"}
                          link={item?.link ?? ""}
                          title={title}
                        />
                      ))}
                    </div>
                  </div>
                </If.False>
              </If>
              <Divider type="vertical" style={{ height: "244px" }} />
              <If
                condition={segmentItemsMap[selectedSegment]?.isLoading ?? false}
              >
                <If.True>
                  <Skeleton
                    active
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                    }}
                  />
                </If.True>
                <If.False>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        padding: "8px 16px 0px 16px",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "8px",
                        background:
                          "linear-gradient(0deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.03) 100%), #FFF",
                        height: "204px",
                      }}
                    >
                      {segmentItemsMap[selectedSegment]?.repositoryItems?.map(
                        (item, index) => (
                          <ProgressItem
                            key={index}
                            name={item.name}
                            icon={item.icon}
                            progressPercent={item.progressPercent}
                            value={item.value ?? "0"}
                            link={item?.link ?? ""}
                            title={title}
                          />
                        )
                      )}
                    </div>
                    <ProgressCircleWithLabel
                      percent={
                        segmentItemsMap[selectedSegment]?.repositories ?? 0
                      }
                      label="Repositories - All"
                      icon={
                        title === "Compliance" ? (
                          <FileProtectOutlined
                            style={{
                              width: "20px",
                              height: "20px",
                              color: "#1677FF",
                            }}
                          />
                        ) : (
                          <DatabaseOutlined
                            style={{
                              width: "20px",
                              height: "20px",
                              color: "#1677FF",
                            }}
                          />
                        )
                      }
                      isRepo={true}
                      link={segmentItemsMap[selectedSegment]?.repoLink}
                      total={totalRepositories}
                      title={title}
                    />
                  </div>
                </If.False>
              </If>
            </div>
          </div>
        )}
      </DataTestId>
    </div>
  );
};

const SegmentedWrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    margin: 0 !important;
  }
`;

export default DashboardCard;
