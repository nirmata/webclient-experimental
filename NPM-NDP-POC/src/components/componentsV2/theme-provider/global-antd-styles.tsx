import { createGlobalStyle } from "styled-components";
import { TVariables } from "../../../theme/types";

const GlobalAntDStyles = createGlobalStyle<{ variables: TVariables }>`
.anticon.anticon-ellipsis {
  rotate: 90deg;
}
.ant-modal .ant-modal-content {
  padding: ${props => props.variables['spacing.5']};
}
.ant-modal .ant-modal-header {
  margin-bottom: ${props => props.variables['spacing.5']};
}
`;

export default GlobalAntDStyles;
