import React from 'react';
import { TPolicyReportResultData_Status as TPolicyReportResultData_Status_ClusterService } from '../../../../../nirmata-model-schema/Cluster.TPolicyReportResultData';
import { TPolicyReportResultDataData_Status as TPolicyReportResultData_Status_PoliciesService } from '../../../../../nirmata-model-schema/Policies.TPolicyReportResultDataData';
import { Select, SelectProps } from 'antd';

type TOption = {
  value: TPolicyReportResultData_Status_ClusterService | TPolicyReportResultData_Status_PoliciesService,
  label: string,
};

const options: TOption[] = [
  { value: 'error', label: 'Error' },
  { value: 'fail', label: 'Fail' },
  { value: 'pass', label: 'Pass' },
  { value: 'skip', label: 'Skip' },
  { value: 'warn', label: 'Warn' },
];

const optionsSortedByName = options.sort((a, b) => {
  return a.label.localeCompare(b.label);
})

const Status: React.FC<Omit<SelectProps<string[]>, 'options'>> = ({ style, value, ...props }) => {
  return (
    <Select<string[]>
      allowClear
      mode="multiple"
      options={optionsSortedByName}
      placeholder="Status"
      style={{ minWidth: '120px', ...style }}
      value={value?.filter((it: any) => it.length > 0)}
      {...props}
    />
  );
};

export default Status;
