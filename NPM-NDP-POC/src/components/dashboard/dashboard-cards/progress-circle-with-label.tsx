import React, { useState } from "react";
import { Progress } from "antd";
import { nirmataColors } from "../../componentsV2/assets/global";
import { ResourceKindTag } from "../../componentsV2/ResourceKind/resource-kind";

type ProgressCircleWithLabelProps = {
  percent: number;
  label: React.ReactNode;
  icon: JSX.Element;
  selectedNamespaceSegment?: string;
  isRepo?: boolean;
  selectedNamespaceOption?: string;
  link?: string;
};

export const getStrokeColor = (score?: number) => {
  if (!score) return nirmataColors.grey30;
  if (score < 35) return "#D8363E";
  if (score < 75) return "#FB8C14";
  return "#4CB919";
};

const ProgressCircleWithLabel: React.FC<ProgressCircleWithLabelProps> = ({
  percent,
  label,
  icon,
  selectedNamespaceSegment,
  isRepo,
  selectedNamespaceOption,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "204px",
        width: "35%",
        padding: "8px 24px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "8px",
        background: isHovered ? "rgba(22, 119, 255, 0.25)" : "#FFF",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        textDecoration: "none",
        transition: "background 0.3s ease",
        border: isHovered ? "1px solid #1677FF" : "1px solid transparent",
      }}
    >
      <a
        href={link}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <Progress
            type="circle"
            percent={percent}
            size={144}
            strokeWidth={10}
            strokeColor={getStrokeColor(percent)}
          />
        </div>
        <div
          style={{
            color: "#1677FF",
            textAlign: "center",
            display: "flex",
            gap: "4px",
            justifyContent: "center",
            marginTop: "8px",
            fontSize: "14px",
          }}
        >
          {selectedNamespaceSegment === "clusters" ||
          isRepo ||
          selectedNamespaceOption !== "" ? (
            <div>{icon}</div>
          ) : (
            (
              <ResourceKindTag
                kind={"namespace"}
                style={{
                  textAlign: "center",
                  display: "flex",
                  gap: "4px",
                  width: "20px",
                  height: "20px",
                  color: "#1677FF",
                }}
              />
            ) ?? <div>{icon}</div>
          )}
          <div>{label}</div>
        </div>
      </a>
    </div>
  );
};

export default ProgressCircleWithLabel;
