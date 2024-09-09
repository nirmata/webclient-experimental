import { Select, SelectProps } from 'antd';
import React from 'react';

type TOption = {
  value: string,
  label: string,
};

const options: TOption[] = [
  { value: 'critical', label: 'Critical' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

const optionsSortedByName = options.sort((a, b) => {
  return a.label.localeCompare(b.label);
})

const Severity: React.FC<Omit<SelectProps<string[]>, 'options'>> = ({ style, value, ...props }) => {
  return (
    <Select<string[]>
      allowClear
      mode="multiple"
      options={optionsSortedByName}
      placeholder="Severity"
      style={{ minWidth: '120px', ...style }}
      value={value?.filter((it: any) => it.length > 0)}
      {...props}
    />
  );
};

export default Severity;
