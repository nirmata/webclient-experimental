import React from 'react';
import TMayBe from '../../nirmata-model-schema/TMayBe';
import { TClassName } from '../../theme/types';
import getClassNames from '../../theme/get-class-names';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';

const gradeClassNames: Record<string, TClassName> = {
  A: 'n-success',
  B: 'n-blue-6',
  C: 'n-blue-4',
  D: 'n-warning',
  F: 'n-danger',
  UNKNOWN: 'n-gray-7',
};

const Grade: React.FC<TextProps & { grade?: TMayBe<string> }> = ({ grade, ...props }) => {
  return (
    <Typography.Text
      className={getClassNames([gradeClassNames[(grade?.replace(/[^a-z]/ig, '') ?? 'UNKNOWN').toUpperCase()], 'n-font-size-lg'])}
      {...props}
    >
      {(grade ?? "").toUpperCase()}
    </Typography.Text>
  );
};

export default Grade;
