
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { RepRealDataTableRow, fileTypeIcons } from '../../../components/componentsV2/types';

const StyledColumn = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  .anticon{
    font-size: 1.5rem;
  }
`

export const getColumnFileTypesProps = (): ColumnType<RepRealDataTableRow> => ({
  key: 'filetypes',
  title: 'File Types',
  dataIndex: 'filetypes',
  width: '11.5rem',
  render: (titles: string[]) => {
    const sortedTitles = [...titles].sort((a, b) => a.localeCompare(b));
    return (
      <StyledColumn>
        {sortedTitles.map((title) => {
          const icon = fileTypeIcons[title];
          return <span key={title}>{icon}</span>;
        })}
      </StyledColumn>
    );
  },
});
