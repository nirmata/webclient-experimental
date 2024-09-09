import styled from 'styled-components';
import DashboardStatPoliciesCard from './dashboard-stat-policies-card';
import { MetricEntry } from '../../types';
import { Skeleton } from 'antd';
import If from '../../../if';

interface DashboardStatPoliciesProps {
  policiesData: MetricEntry[];
  loadingPolicies: boolean;
}

const DashboardStatPolicies: React.FC<DashboardStatPoliciesProps> = ({ policiesData, loadingPolicies }) => {
  return (
    <Container>
      <Title>Policies</Title>
      <If condition={loadingPolicies}>
        <If.True>
          <Skeleton active style={{ width: '100%;' }} />
        </If.True>
        <If.False>
          <Content>
            {policiesData.map((data, index) => (
              <DashboardStatPoliciesCard
                key={index}
                title={data.title}
                textColor={data?.textColor}
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

const Container = styled.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  border-radius: 8px;
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
  gap: 8px;
  justify-content: space-between;
`;

export default DashboardStatPolicies;
