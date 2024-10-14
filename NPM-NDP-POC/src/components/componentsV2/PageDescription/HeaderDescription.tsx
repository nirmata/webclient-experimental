import { FC } from 'react';
import styled from 'styled-components';

interface HeaderDescriptionProps {
  text: string;
}

export const HeaderDescription: FC<HeaderDescriptionProps> = ({ text }) => {
  return <StyledHeaderDescription>{text}</StyledHeaderDescription>;
};

const StyledHeaderDescription = styled.p`
  margin: 0;
  max-width: 700px;
  opacity: 0.65;
`;
