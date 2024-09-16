import styled from 'styled-components';
import {
  InputProps,
  Input as AntdInput,
} from 'antd';
import { nirmataColors, config } from "../assets/global";

export const Input = styled(AntdInput) <InputProps>`
  color: #333;
  border-color: #e4e4e9;
  border-radius: ${config.token.inputBorderRadius};
  background-color: 1px solid ${nirmataColors.grey50};
 
  &:focus, &:focus-visible, &:focus-within {
    outline: 0px;
    box-shadow: none;
    border-color: ${nirmataColors.blue300};
  }
  &:hover {
    border-color: ${nirmataColors.blue300};
  }
`;
