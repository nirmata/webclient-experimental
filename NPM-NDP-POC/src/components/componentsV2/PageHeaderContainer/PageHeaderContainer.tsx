import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface PageHeaderContainerProps {
  children: ReactNode;
}

const StyledPageContentStyles = styled('div')`
  padding: 1.5rem 1rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PageHeaderContainer: FC<PageHeaderContainerProps> = ({ children }) => {
  return <StyledPageContentStyles>{children}</StyledPageContentStyles>;
};
