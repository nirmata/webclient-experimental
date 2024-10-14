import React, { useState } from "react";
import { Progress } from "antd";
import { getStrokeColor } from "./progress-circle-with-label";
import styled from "styled-components";

type ProgressItemProps = {
  name: string;
  icon?: JSX.Element;
  progressPercent: number;
  value: string;
  link: string;
  title?: string;
};

const ProgressItem: React.FC<ProgressItemProps> = ({
  name,
  icon,
  progressPercent,
  value,
  link,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const Container = link ? "a" : "div";
  return (
    <Container
      style={{
        display: "flex",
        paddingRight: "32px",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        borderRadius: "6px",
        border: isHovered ? "1px solid #1677FF" : "1px solid transparent",
        background: isHovered ? "rgba(22, 119, 255, 0.25)" : "transparent",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        textDecoration: "none",
        transition: "background 0.3s ease, border 0.3s ease",
        width: "100%",
      }}
      href={link || undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div>{icon}</div>
        <div
          style={{
            textDecoration: "none",
            color: link ? "#1677FF" : "rgba(0, 0, 0, 0.45)",
            flex: 1,
          }}
        >
          {name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginTop: "-9px",
          gap: "8px",
        }}
      >
        <ProgressWrapper>
          <Progress
            percent={progressPercent}
            type="line"
            size="small"
            strokeColor={
              title === "Violations"
                ? "#D8363E"
                : getStrokeColor(progressPercent)
            }
            format={() => <span></span>}
          />
        </ProgressWrapper>
        <div
          style={{
            fontSize: "14px",
            color: "black",
            whiteSpace: "nowrap",
            alignSelf: "flex-start",
          }}
        >
          {value ?? "0"}
        </div>
      </div>
    </Container>
  );
};

export default ProgressItem;

const ProgressWrapper = styled.div`
  .ant-progress-inner {
    width: 240px !important;
  }
`;
