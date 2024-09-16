import styled from 'styled-components';
import { ButtonProps, Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/es/button';

export interface StyledButtonProps extends ButtonProps {
  type?: ButtonType;
}

export const Button = styled(AntdButton) <StyledButtonProps>`
  .ant-btn-icon {
    svg {
      height: ${props => (!props.children ? '14px' : 'inherit')};
    }
  }
`;

