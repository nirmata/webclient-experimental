import { Menu, MenuProps } from 'antd';
import styled from 'styled-components';

const NMenu = (props: MenuProps) => {
  return <StyledMenu theme={'light'} {...props} />;
};

const StyledMenu = styled(Menu)`
&.ant-menu-item .ant-menu-item-selected {
        background-color: #e6f4ff !important;
        color: #2e5596;
    }
`;
export default NMenu;

