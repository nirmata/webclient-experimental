import { FC } from 'react';
import styled from 'styled-components';
import { config } from '../assets/global';

const KpiGradeStyled = styled.span<{ gradeColor: string }>`
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${props => props.gradeColor};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem;
`;

export enum KpiGradeLevel {
  A = 'A',
  A_PLUS = 'A+',
  B = 'B',
  B_PLUS = 'B+',
  C = 'C',
  C_PLUS = 'C+',
  D = 'D',
  D_PLUS = 'D+',
  F = 'F',
  DEFAULT = 'DEFAULT'
}

const gradeColors: Record<KpiGradeLevel, string> = {
  [KpiGradeLevel.A]: config.token.colorSuccess,
  [KpiGradeLevel.A_PLUS]: config.token.colorSuccess,
  [KpiGradeLevel.B]: config.token.colorPrimary,
  [KpiGradeLevel.B_PLUS]: config.token.colorPrimary,
  [KpiGradeLevel.C]: config.token.colorBlue,
  [KpiGradeLevel.C_PLUS]: config.token.colorBlue,
  [KpiGradeLevel.D]: config.token.colorOrange,
  [KpiGradeLevel.D_PLUS]: config.token.colorOrange,
  [KpiGradeLevel.F]: config.token.colorError,
  [KpiGradeLevel.DEFAULT]: config.token.colorSkipped
};

interface KpiGradeProps {
  grade: KpiGradeLevel;
}


export const KpiGrade: FC<KpiGradeProps> = ({ grade }) => {
  const gradeColor = gradeColors[grade] || gradeColors[KpiGradeLevel.DEFAULT];
  return (
    <KpiGradeStyled gradeColor={gradeColor}>
      {grade}
    </KpiGradeStyled>
  );
};
