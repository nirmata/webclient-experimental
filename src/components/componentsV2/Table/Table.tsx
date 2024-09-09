import { Table as AntdTable, TableProps } from 'antd';
import type { AnyObject } from 'antd/es/_util/type';
import styled from 'styled-components';
import { nirmataColors } from '../assets/global';

const StyledTable = styled(AntdTable)`
  .ant-table-container{
    border-inline-start-color: ${nirmataColors.grey50} !important;
    border-top-color: ${nirmataColors.grey50} !important;
    border-inline-end-color: ${nirmataColors.grey50} !important;
    border-bottom-color:${nirmataColors.grey50} !important;
  }
  .ant-table-content {
    > table {
      > thead{
        > tr {
          .ant-table-row-expand-icon-cell{
            border-bottom: 2px solid ${nirmataColors.grey50};
            border-inline-end-color: ${nirmataColors.grey50} !important;
          }
        }
      }
      > tbody {
        > tr > td {
          border-top: 0px;
          border-bottom: 2px solid ${nirmataColors.grey50};
          border-right-width: 1px;
          border-right-color: ${nirmataColors.grey50} !important;
        }
        .ant-table-row-expand-icon{
          border-radius: 0;
          border-color: ${nirmataColors.grey60};
          background: transparent;
          &::before{
            background: ${nirmataColors.grey60};
          }
          &::after{
            background: ${nirmataColors.grey60};
          }
        }
        .ant-table-row-level-0{
          &>td:first-child{
          }
        }
        .ant-table-expanded-row{
          .ant-table-cell{
            padding: 0.5rem 3rem;
            &>div{
              margin-bottom: .5rem;
              &:last-child{
                margin-bottom: 0;
              }
            }
          }
        }
      }
      > thead {
        &> tr {
          &> th {
            color: ${nirmataColors.black};
            border-top: 0px;
            border-bottom: 2px solid ${nirmataColors.grey50};
            border-right-width: 1px;
            border-right-color: ${nirmataColors.grey50} !important;
            &::before {
              display: none;
            }
          }
          &:not(:last-child)>th{
            border-bottom: 2px solid ${nirmataColors.grey50} !important;
          }
        }
      }
    }
  }
  .ant-pagination {
    .ant-pagination-disabled {
      background: transparent;
    }

    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      background: #f5f5f5;

      .ant-pagination-item-ellipsis,
      .ant-pagination-item-link-icon {
        color: #a6a6a6;
      }
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      .ant-pagination-item-link {
        border-radius: 0;
      }
    }

    .ant-pagination-prev,
    .ant-pagination-item,
    .ant-pagination-next,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      border: 1px solid #e4e4e8;
      border-radius: 4px;
      margin-inline-end: 4px;

      a {
        color: #333333;
      }
    }

    .ant-pagination-item-active {
      border-color: #385492;

      a {
        color: #385492;
      }
    }
  }
`;
export const Table = <RecordType extends AnyObject = AnyObject>(props: TableProps<RecordType>) => {
  return (
    <StyledTable
      {...props}
      bordered
      pagination={{
        size: 'default',
        showSizeChanger: false,
        ...props.pagination,
      }}
    />
  );
};


