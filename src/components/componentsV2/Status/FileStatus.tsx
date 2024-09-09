import styled from 'styled-components';
import { StatusTag } from '../Tag';
import { StatusTagVariant } from '../Tag/StatusTag';
import { FC } from 'react';

interface FileStatusProps {
  passed: number;
  failed: number;
  warning: number;
  error: number;
  skipped: number;
  lastScanTime: string | null;
}

export const FileStatus: FC<FileStatusProps> = ({ passed, failed, warning, error, skipped, lastScanTime }) => {
  return (
    <FileStatusContainer>
      <KpiWrapper>
        <StatusTag style={{ padding: '15px ' }} size='MEDIUM' variant={StatusTagVariant.PASSED}>
          {passed}
        </StatusTag>
        <StatusTag style={{ padding: '15px ' }} size='MEDIUM' variant={StatusTagVariant.FAILED}>
          {failed}
        </StatusTag>
        <StatusTag style={{ padding: '15px ' }} size='MEDIUM' variant={StatusTagVariant.WARNING}>
          {warning}
        </StatusTag>
        <StatusTag style={{ padding: '15px ' }} size='MEDIUM' variant={StatusTagVariant.ERROR}>
          {error}
        </StatusTag>
        <StatusTag style={{ padding: '15px ' }} size='MEDIUM' variant={StatusTagVariant.SKIPPED}>
          {skipped}
        </StatusTag>
      </KpiWrapper>

      {lastScanTime ? (
        <StatusTag size='SMALL' variant={'Default' as StatusTagVariant}>
          Last updated {lastScanTime}
        </StatusTag>
      ) : null}
    </FileStatusContainer>
  );
};

const FileStatusContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const KpiWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
