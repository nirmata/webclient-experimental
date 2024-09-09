import React from 'react';
import getClassNames from '../../theme/get-class-names';

export const getCurrentPageRange = (total: number, range: [number, number]) => `${range[0]}-${range[1]} of ${total}`;

export const CurrentPageRange: React.FC<{
  range: [number, number],
  total: number,
}> = ({ range, total }) => (range[0] !== range[1] && total > 0)
  ? (
    <div className={getClassNames([
      'n-p-l-2', 'n-p-r-2',
      'n-border', 'n-border-radius',
    ])}>
      {getCurrentPageRange(total, range)}
    </div>
  )
  : null;
