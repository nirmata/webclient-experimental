import { createGlobalStyle } from "styled-components";
import { TVariables } from "../../../theme/types";

const GlobalRootStyles = createGlobalStyle<{ variables: TVariables }>`
  * { margin: 0; padding: 0; }

  ::-webkit-scrollbar {
    height: 3px;
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.variables['color.gray.6']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.variables['color.gray.8']};
    border-radius: ${props => props.variables['border.radius.small']};
  }

  body {
    font-family: ${props => props.variables['font.family']};
    font-size: ${props => props.variables['font.size']};
    font-weight: ${props => props.variables['font.weight']};
    color: ${props => props.variables['font.color']};
    line-height: ${props => props.variables['line.height']};
  }
`;

export default GlobalRootStyles;
