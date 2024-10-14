import { useRef } from 'react';
import { Input } from './Input';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { InputProps, InputRef } from 'antd';

export interface SearchProps extends InputProps {
  onSearch?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  loading?: boolean;
}

export const Search: React.FC<SearchProps> = (props) => {
  const { onSearch: customOnSearch } = props;

  const inputRef = useRef<InputRef>(null);

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const searchString = inputRef.current?.input?.value ?? '';
    customOnSearch?.(searchString, e);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.type === 'click') {
      inputRef.current?.input && (inputRef.current.input.value = '');
      customOnSearch?.('', e);
    }
  };

  return (
    <Input
      ref={inputRef}
      allowClear
      placeholder='Search'
      onChange={onChange}
      onPressEnter={onSearch}
      prefix={<SearchOutlined />}
      {...props}
    />
  );
};
