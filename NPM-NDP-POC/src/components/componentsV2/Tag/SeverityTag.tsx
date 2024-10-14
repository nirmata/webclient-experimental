import styled from 'styled-components';
import { TagProps, Tag as AntdTag } from 'antd';
import { nirmataColors } from '../assets/global';
import { FC } from 'react';


interface SeverityTagProps extends TagProps {
  variant: SeverityTagVariant;
  width?: string;
}

export enum SeverityTagVariant {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  NA = 'na'
}

export const severityTagColor: Record<SeverityTagVariant, string> = {
  [SeverityTagVariant.CRITICAL]: nirmataColors.colorErrorActive,
  [SeverityTagVariant.HIGH]: nirmataColors.colorError,
  [SeverityTagVariant.MEDIUM]: nirmataColors.colorOrange,
  [SeverityTagVariant.LOW]: nirmataColors.colorWarning,
  [SeverityTagVariant.NA]: nirmataColors.grey30,
};

export const SeverityTag: FC<SeverityTagProps> = styled(AntdTag) <SeverityTagProps>`
  text-align: center;
  margin-inline-end: 0;
  border: none;
  line-height: 1.375rem;
  height: 1.375rem;
  border-radius: 0.25rem;
  color: ${nirmataColors.white};
  width: ${({ width }) => width ? width : '3.5rem'};
  background-color: ${({ variant }) => severityTagColor[variant || SeverityTagVariant.LOW]};
`;



