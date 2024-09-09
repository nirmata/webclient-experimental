import styled from 'styled-components';
import { StatusTag } from '../Tag';
import { StatusTagVariant } from '../Tag/StatusTag';
import { FC } from 'react';


interface FileStatusProps {
  passed: number,
  failed: number,
  warning: number,
  error: number,
  skipped: number,
  lastScanTime: string,
}

export const FileStatus: FC<FileStatusProps> = ({ passed , failed, warning, error, skipped, lastScanTime}) => {
  return (
    <FileStatusContainer>
      <KpiWrapper>
        <StatusTag size='MEDIUM' variant={StatusTagVariant.PASSED}>
          {passed}
        </StatusTag>
        <StatusTag size='MEDIUM' variant={StatusTagVariant.FAILED} >
          {failed}
        </StatusTag>
        <StatusTag size='MEDIUM' variant={StatusTagVariant.WARNING}>
          {warning}
        </StatusTag>
        <StatusTag size='MEDIUM' variant={StatusTagVariant.ERROR}>
          {error}
        </StatusTag>
        <StatusTag size='MEDIUM' variant={StatusTagVariant.SKIPPED} >
          {skipped}
        </StatusTag>
      </KpiWrapper>
      
      <StatusTag size='SMALL' variant={'Default' as StatusTagVariant}>
      Last updated {lastScanTime}
      </StatusTag>
    </FileStatusContainer>
  );
};

const FileStatusContainer = styled.div`
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

