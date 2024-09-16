import React from 'react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const GradeHelpTooltip: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const getGradeInfo = (grade: React.ReactNode) => {
    switch (grade) {
      case 'A+':
        return 'A+ Grade = Passed % is greater than 95%';
      case 'A':
        return 'A Grade = Passed % is between 90% and 95%';
      case 'B+':
        return 'B+ Grade = Passed % is between 85% and 90%';
      case 'B':
        return 'B Grade = Passed % is between 80% and 85%';
      case 'C+':
        return 'C+ Grade = Passed % is between 75% and 80%';
      case 'C':
        return 'C Grade = Passed % is between 70% and 75%';
      case 'D':
        return 'D Grade = Passed % is between 60% and 70%';
      case 'F':
        return 'F Grade = Passed % is less than 60%';
      default:
        return 'Grade information not available';
    }
  };

  return (
    <Tooltip
      placement='bottom'
      title={
        <div className='n-flex n-flex-column n-gap-4'>
          <div>{getGradeInfo(children)}</div>
          <div>
            The grade is calculated based on the percentage of policies passed out of the total number of policies.
          </div>
        </div>
      }
      trigger={['hover']}
    >
      {children ?? <InfoCircleOutlined />}
    </Tooltip>
  );
};

export default GradeHelpTooltip;
