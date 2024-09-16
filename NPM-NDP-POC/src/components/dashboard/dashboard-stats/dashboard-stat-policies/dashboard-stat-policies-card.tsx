import * as React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  textColor?: string;
  link?: string;
}

const DashboardStatPoliciesCard: React.FC<CardProps> = ({ title, value, icon, textColor, link }) => {
  return link ? (
    <CardContainer as="a" href={link}>
      <CardTitle textColor={textColor}>{title}</CardTitle>
      <CardContent textColor={textColor}>
        <div>{icon}</div>
        <div>{value}</div>
      </CardContent>
    </CardContainer>
  ) : (
    <CardContainer as="div">
      <CardTitle textColor={textColor}>{title}</CardTitle>
      <CardContent textColor={textColor}>
        <div>{icon}</div>
        <div>{value}</div>
      </CardContent>
    </CardContainer>
  );
};

export default DashboardStatPoliciesCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  background-color: #fff;
  padding: 8px;
  box-sizing: border-box;
  width: calc(25% - 8px);
  text-decoration: none;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.03),
    0px 1px 6px -1px rgba(0, 0, 0, 0.02),
    0px 2px 4px 0px rgba(0, 0, 0, 0.02);
  &:hover {
    background: rgba(22, 119, 255, 0.25);
    border: 1px solid #1677FF;
    box-shadow:
      0px 2px 4px 0px rgba(0, 0, 0, 0.04),
      0px 2px 8px -2px rgba(0, 0, 0, 0.04),
      0px 4px 6px 0px rgba(0, 0, 0, 0.04);
  }
`;

const CardTitle = styled.div<{ textColor?: string }>`
  color: rgba(0, 0, 0, 0.45);
  font-size: 13px;
`;

const CardContent = styled.div<{ textColor?: string }>`
  display: flex;
  margin-top: 4px;
  gap: 4px;
  font-size: 24px;
  color: ${({ textColor }) => textColor || 'rgba(0, 0, 0, 0.88)'};
  font-weight: 600;
  text-align: right;
  padding: 0 32px;
  align-items: center;
  justify-content: center;
`;
