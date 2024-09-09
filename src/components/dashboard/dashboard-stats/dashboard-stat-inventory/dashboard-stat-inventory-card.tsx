import * as React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  isLast?: boolean;
  link?: string;
}

const DashboardStatInventoryCard: React.FC<CardProps> = ({ title, value, icon, isLast, link }) => {
  return (
    <CardContainer>
      <StyledLink href={link ?? ''}>
        <CardTitle isLast={isLast}>{title}</CardTitle>
        <CardContent>
          <div>{icon}</div>
          <div>{value}</div>
        </CardContent>
      </StyledLink>
    </CardContainer>
  );
};

export default DashboardStatInventoryCard;

const CardContainer = styled.div`
  justify-content: center;
  border-radius: 4px;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.03),
    0px 1px 6px -1px rgba(0, 0, 0, 0.02),
    0px 2px 4px 0px rgba(0, 0, 0, 0.02);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  padding: 8px;
  border: 1px solid transparent;
  &:hover {
    border-radius: 4px;
    background: rgba(22, 119, 255, 0.25);
    border: 1px solid #1677FF;
    box-shadow:
      0px 2px 4px 0px rgba(0, 0, 0, 0.04),
      0px 2px 8px -2px rgba(0, 0, 0, 0.04),
      0px 4px 6px 0px rgba(0, 0, 0, 0.04);
  }
`;

const CardTitle = styled.div<{ isLast?: boolean }>`
  color: rgba(0, 0, 0, 0.45);
  align-self: ${({ isLast }) => (isLast ? 'center' : 'start')};
  font-size: 13px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  gap: 4px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  text-align: right;
  padding: 0 32px;
`;
