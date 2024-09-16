import styled from 'styled-components';
import { Tabs as AntTabs, TabsProps } from 'antd';
import { config } from '../assets/global';
import { FC } from 'react';

export const Tabs: FC<TabsProps> = styled(AntTabs)`
    .ant-tabs-nav {
        margin: 0;
        &-list {
            margin: 0 1rem;
            .ant-tabs-tab {
                &-btn{
                    padding-top: 0 !important;
                    font-weight: ${config.token.basicFontWeight};
                    color: ${config.token.tabs.color};
                }
                &-active {
                    position: relative;

                    .ant-tabs-tab-btn {
                        color: ${config.token.tabs.activeColor};
                    }
                }
            }
            .ant-tabs-ink-bar{
                background: ${config.token.tabs.activeColor};
            }
        }
    }
`;