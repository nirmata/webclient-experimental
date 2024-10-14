import styled from 'styled-components';
import { Select as AntSelect, SelectProps } from 'antd';
import { config, nirmataColors } from '../assets/global';

export const Select = styled(AntSelect) <SelectProps>`
    box-shadow: none !important;
    &:focus, &:focus-visible, &:focus-within {
      outline: 0px;
      border-color: ${nirmataColors.blue300}!important;
      .ant-select-selector{
        border-color: ${nirmataColors.blue300};
      }
    }
    &:hover {
      border-color: ${nirmataColors.blue300}!important;
      .ant-select-selector{
        border-color: ${nirmataColors.blue300} !important;
      }
    }
    .ant-select-selector{
        color: #333;
        border-color: #e4e4e9;
        border-radius: ${config.token.inputBorderRadius};
        background-color: 1px solid ${nirmataColors.grey50};
         box-shadow: none !important;
        &:focus, &:focus-visible, &:focus-within {
            outline: 0px;
            border-color: ${nirmataColors.blue300};
        }
        &:hover {
            border-color: ${nirmataColors.blue300};
        }
    }
    input:focus:not(.ant-input){
      box-shadow: none !important;
    }
`;