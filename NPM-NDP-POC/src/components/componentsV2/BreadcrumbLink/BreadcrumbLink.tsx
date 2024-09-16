import { LeftOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';
import { nirmataColors } from '..';

interface BreadcrumbLinkProps {
  items: { title: React.ReactNode; href?: string }[];
}

const StyledBreadcrumb = styled(Breadcrumb)`
  a{
    text-decoration: none;
    transition: .2s ease all;
    color: ${nirmataColors.colorTextTertiary};
  }
`

export const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({ items }) => {
  return (
    <StyledBreadcrumb
      items={[
        ...items.map((item, index) => ({
          title: (
            <>
              {index === 0 && <LeftOutlined />}
              <a href={item.href}>{item.title}</a>
            </>
          ),
        })),
      ]}
    />
  );
};
