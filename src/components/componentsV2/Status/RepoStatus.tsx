import styled from 'styled-components';
import { KpiGrade, KpiGradeLevel } from '../KpiGrade';
import { StatusTag } from '../Tag';
import { StatusTagVariant } from '../Tag/StatusTag';
import { FC } from 'react';


interface RepoStatusProps{
  passed: number,
  failed: number,
  files: number,
  grade: string,
  lastScanTime: string,
}

export const RepoStatus: FC<RepoStatusProps> = ({passed,failed,files, grade, lastScanTime}) => {
  return (
    <RepoStatusContainer>
      <KpiWrapper>
        <KpiGrade grade={grade as KpiGradeLevel} />
        <StatusTag size='MEDIUM' variant={'pass' as StatusTagVariant}>
          {Math.round((passed/(files?files:1))*100)} %
        </StatusTag>
        <StatusTag size='MEDIUM' variant={'fail' as StatusTagVariant} >
          {`${failed} of ${files}`}
        </StatusTag>
      </KpiWrapper>

      <StatusTag size='SMALL' variant={'Default' as StatusTagVariant}>
      Last updated {lastScanTime}
      </StatusTag>
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

