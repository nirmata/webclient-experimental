import * as React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  textColor?: string;
  link?: string;
}

const DashboardStatAlarmsCard: React.FC<CardProps> = ({
  title,
  value,
  icon,
  textColor,
  link,
}) => {
  return link ? (
    <CardContainer as="a" href={link}>
      <CardTitle>{title}</CardTitle>
      <CardContent textColor={textColor}>
        <div>{icon}</div>
        <div>{value}</div>
      </CardContent>
    </CardContainer>
  ) : (
    <CardContainer as="div">
      <CardTitle>{title}</CardTitle>
      <CardContent textColor={textColor}>
        <div>{icon}</div>
        <div>{value}</div>
      </CardContent>
    </CardContainer>
  );
};

export default DashboardStatAlarmsCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.03),
    0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.02);
  padding: 8px;
  width: calc(50% - 8px);
  text-decoration: none;
  transition: background 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  box-sizing: border-box;
  border: 1px solid transparent;
  &:hover {
    background: rgba(22, 119, 255, 0.25);
    border: 1px solid #1677ff;
    text-decoration: none;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04),
      0px 2px 8px -2px rgba(0, 0, 0, 0.04), 0px 4px 6px 0px rgba(0, 0, 0, 0.04);
  }
`;

const CardTitle = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 13px;
`;

const CardContent = styled.div<{ textColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 24px;
  color: ${({ textColor }) => textColor || "rgba(0, 0, 0, 0.88)"};
  font-weight: 600;
  text-align: right;
  padding: 0 32px;
  margin-top: 4px;
`;
