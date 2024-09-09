import { Input, InputProps } from 'antd';
import React from 'react';

const SearchBox: React.FC<InputProps> = ({ style, ...props }) => {
  return <Input allowClear placeholder="Search" style={{ width: '240px', ...style }} {...props} />;
};

export default SearchBox;
