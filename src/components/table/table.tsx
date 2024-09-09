import FolderOpenOutlined from '@ant-design/icons/FolderOpenOutlined';
import AntTable, { TableProps } from 'antd/es/table';
import getClassNames from '../../theme/get-class-names';
import { CurrentPageRange } from './pagination';

const Table = <T extends object,>({ emptyMessage, pagination, ...props }: TableProps<T> & { emptyMessage?: React.ReactNode }) => {
  if (!props.rowKey) {
    throw new Error('rowKey not set!')
  }

  return (
    <AntTable
      locale={{
        emptyText: () => {
          return (
            <div className={getClassNames([
              'n-flex', 'n-flex-column', 'n-align-items-center', 'n-justify-content-center', 'n-gap-2',
              'n-color-secondary', 'n-p-10',
            ])}>
              <div>
                <FolderOpenOutlined style={{ fontSize: '40px' }} />
              </div>
              <div>
                {emptyMessage ?? 'No data found!'}
              </div>
            </div>
          );
        },
      }}
      pagination={(pagination !== false)
        ? {
          pageSize: 10,
          pageSizeOptions: [10, 25, 50],
          showTotal: (total, range) => <CurrentPageRange range={range} total={total} />,
          size: 'default',
          ...pagination,
          onChange: (pagination && pagination.onChange)
            ? (changedPage, changedPageSize) => {
              if ((pagination && pagination.onChange)) {
                pagination.onChange(changedPageSize !== pagination.pageSize ? 0 : changedPage - 1, changedPageSize);
              }
            }
            : undefined,
        }
        : undefined}
      size="small"
      {...props}
    />
  );
};

export default Table;
