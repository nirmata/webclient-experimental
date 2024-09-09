import styled from 'styled-components';
import { TagProps, Tag as AntdTag } from 'antd';
import { nirmataColors } from '../assets/global';
import { FC } from 'react';
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, MinusCircleOutlined, WarningOutlined } from '@ant-design/icons';


interface StyledTagProps extends TagProps {
  size: keyof typeof TagSize;
  variant: StatusTagVariant;
}

export enum StatusTagVariant {
  FAILED = 'fail',
  WARNING = 'Warning',
  PASSED = 'pass',
  ERROR = 'error',
  SKIPPED = 'Skipped',
  DEFAULT = 'Default'
}

const statusTagColor: Record<StatusTagVariant, string> = {
  [StatusTagVariant.FAILED]: nirmataColors.colorErrorActive,
  [StatusTagVariant.WARNING]: nirmataColors.colorWarning,
  [StatusTagVariant.ERROR]: nirmataColors.colorError,
  [StatusTagVariant.PASSED]: nirmataColors.colorSuccess,
  [StatusTagVariant.SKIPPED]: nirmataColors.defaultColor,
  [StatusTagVariant.DEFAULT]: nirmataColors.defaultColor,
};

const statusTagBorderColor: Record<StatusTagVariant, string> = {
  [StatusTagVariant.FAILED]: nirmataColors.colorErrorActiveBorder,
  [StatusTagVariant.WARNING]: nirmataColors.colorWarningBorder,
  [StatusTagVariant.ERROR]: nirmataColors.colorErrorBorder,
  [StatusTagVariant.PASSED]: nirmataColors.colorSuccessBorder,
  [StatusTagVariant.SKIPPED]: nirmataColors.grey50,
  [StatusTagVariant.DEFAULT]: nirmataColors.grey50,
};

const statusTagBgColor: Record<StatusTagVariant, string> = {
  [StatusTagVariant.FAILED]: nirmataColors.colorErrorActiveBg,
  [StatusTagVariant.WARNING]: nirmataColors.colorWarningBg,
  [StatusTagVariant.ERROR]: nirmataColors.colorErrorBg,
  [StatusTagVariant.PASSED]: nirmataColors.colorSuccessBg,
  [StatusTagVariant.SKIPPED]: nirmataColors.tagDefault,
  [StatusTagVariant.DEFAULT]: nirmataColors.tagDefault,
};

const statusTagIcon: Record<StatusTagVariant, JSX.Element> = {
  [StatusTagVariant.FAILED]: <CloseCircleOutlined />,
  [StatusTagVariant.WARNING]: <WarningOutlined />,
  [StatusTagVariant.ERROR]: <ExclamationCircleOutlined />,
  [StatusTagVariant.PASSED]: <CheckCircleOutlined />,
  [StatusTagVariant.SKIPPED]: <MinusCircleOutlined />,
  [StatusTagVariant.DEFAULT]: <></>,
};


export enum TagSize {
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export const StyledStatusTag: FC<StyledTagProps> = styled(AntdTag) <StyledTagProps>`
  text-align: center;
  margin-inline-end: 0;
  display: flex;
  gap: .5rem;
  padding: ${({ size }) => size === TagSize.MEDIUM ? '.5rem' : '0 .5rem'};
  color: ${({ variant }) => statusTagColor[variant || statusTagColor.Default]};
  background-color: ${({ variant }) => statusTagBgColor[variant || statusTagBgColor.Default]};
  border: 1px solid ${({ variant }) => statusTagBorderColor[variant || statusTagBorderColor.Default]};
  border-radius: 0.25rem;
`;

export const StatusTag: FC<StyledTagProps> = ({ variant, children, ...rest }) => {
  let displayText = children;
  if (displayText === StatusTagVariant.FAILED || displayText === StatusTagVariant.PASSED) {
    displayText = variant === StatusTagVariant.FAILED ? 'Failed' : 'Passed';
  }
  return (
    <StyledStatusTag variant={variant || StatusTagVariant.DEFAULT} {...rest}>
      {statusTagIcon[variant || StatusTagVariant.DEFAULT]}
      {displayText}
    </StyledStatusTag>
  );
}





