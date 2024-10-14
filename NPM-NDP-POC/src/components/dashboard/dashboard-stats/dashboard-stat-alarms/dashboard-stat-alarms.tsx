import styled from "styled-components";
import DashboardStatAlarmsCard from "./dashboard-stat-alarms-card";
import { MetricEntry } from "../../types";
import { Skeleton } from "antd";
import If from "../../../if";

interface DashboardStatAlarmsProps {
  alarmsData: MetricEntry[];
  loadingAlarm: boolean;
}

const DashboardStatAlarms: React.FC<DashboardStatAlarmsProps> = ({
  alarmsData,
  loadingAlarm,
}) => {
  return (
    <Container>
      <Title>Alarms & Today’s Events</Title>
      <If condition={loadingAlarm}>
        <If.True>
          <Skeleton active style={{ width: "100%;" }} />
        </If.True>
        <If.False>
          <Content>
            {alarmsData.map((data, index) => (
              <DashboardStatAlarmsCard
                key={index}
                title={data.title}
                textColor={data.textColor}
                value={data.value}
                icon={data.icon}
                link={data?.link}
              />
            ))}
          </Content>
        </If.False>
      </If>
    </Container>
  );
};
export default DashboardStatAlarms;

const Container = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 8px;
  background: #f5f5f5;
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
  column-gap: 16px;
  width: 100%;
`;
