import styled from "styled-components";
import { KpiGrade, KpiGradeLevel } from "../KpiGrade";
import { StatusTag } from "../Tag";
import { StatusTagVariant } from "../Tag/StatusTag";
import { FC } from "react";
import DataTestId from "../../data-test-id";
import If from "../../if";
import GreyDash from "./GreyDash";

interface RepoStatusProps {
  passed: number;
  passPercent: number;
  failed: number;
  files: number;
  grade: string;
  lastScanTime: string | null;
  remediationCount?: number;
  loading?: boolean;
}

export const RepoStatus: FC<RepoStatusProps> = ({
  passPercent,
  failed,
  files,
  grade,
  lastScanTime,
  remediationCount,
  loading,
}) => {
  return (
    <RepoStatusContainer>
      <KpiWrapper>
        <If condition={Boolean(!loading)}>
          <If.True>
            <DataTestId value={"grade"}>
              {(dataTestId) => {
                return (
                  <div {...dataTestId}>
                    {grade ? (
                      <KpiGrade grade={grade as KpiGradeLevel} />
                    ) : (
                      <GreyDash />
                    )}
                  </div>
                );
              }}
            </DataTestId>
          </If.True>
        </If>
        <DataTestId value={"pass"}>
          {(dataTestId) => {
            return (
              <StatusTag
                style={{ padding: "15px " }}
                size="MEDIUM"
                variant={"pass" as StatusTagVariant}
                {...dataTestId}
              >
                {`${passPercent} %`}
              </StatusTag>
            );
          }}
        </DataTestId>
        <DataTestId value={"fail"}>
          {(dataTestId) => {
            return (
              <StatusTag
                style={{ padding: "15px " }}
                size="MEDIUM"
                variant={"fail" as StatusTagVariant}
                {...dataTestId}
              >
                {`${failed} of ${files}`}
              </StatusTag>
            );
          }}
        </DataTestId>
        {remediationCount ? (
          <DataTestId value={"remediation-count"}>
            {(dataTestId) => {
              return (
                <StatusTag
                  style={{ padding: "15px " }}
                  size="MEDIUM"
                  variant={"remediation" as StatusTagVariant}
                  {...dataTestId}
                >
                  {remediationCount}
                </StatusTag>
              );
            }}
          </DataTestId>
        ) : (
          <></>
        )}
      </KpiWrapper>

      {lastScanTime ? (
        <StatusTag size="SMALL" variant={"Default" as StatusTagVariant}>
          Last scanned {lastScanTime}
        </StatusTag>
      ) : null}
    </RepoStatusContainer>
  );
};

const RepoStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const KpiWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
