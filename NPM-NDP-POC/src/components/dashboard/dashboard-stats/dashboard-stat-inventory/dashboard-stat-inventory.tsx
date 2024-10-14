import styled from "styled-components";
import DashboardStatInventoryCard from "./dashboard-stat-inventory-card";
import { MetricEntry } from "../../types";
import If from "../../../if";
import { Skeleton } from "antd";

interface DashboardStatInventoryProps {
  inventoryData: MetricEntry[];
  loadingInventory: boolean;
}

const DashboardStatInventory: React.FC<DashboardStatInventoryProps> = ({
  inventoryData,
  loadingInventory,
}) => {
  return (
    <Container>
      <Title>Inventory</Title>
      <If condition={loadingInventory}>
        <If.True>
          <Skeleton active style={{ width: "100%;" }} />
        </If.True>
        <If.False>
          <Content>
            {inventoryData.map((data, index) => (
              <DashboardStatInventoryCard
                key={index}
                title={data.title}
                value={data.value}
                icon={data.icon}
                isLast={index === inventoryData.length - 1}
                link={data?.link}
              />
            ))}
          </Content>
        </If.False>
      </If>
    </Container>
  );
};

export default DashboardStatInventory;

const Container = styled.div`
  justify-content: start;
  border-radius: 8px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  padding: 8px 16px 16px;
  height: 212px;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  justify-content: space-between;
  margin-top: 8px;
  > div {
    width: calc(50% - 8px);
    &:nth-child(3) {
      width: 100%;
    }
  }
`;
