import { RepoFindingsTableRow } from '../../data';
import { nirmataColors } from '../../../components/componentsV2';
import { OpenInNew } from "../../../components/componentsV2/assets/OpenInNew";
import { GithubOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';

export const getColumnRepositoryProps = (): ColumnType<RepoFindingsTableRow> => ({
  title: 'Branch',
  dataIndex: 'repository',
  key: 'source',
  sorter: true,
  showSorterTooltip: false,
  render: (repository: string,record) => (

    <CellWrapper>
      <GithubOutlined style={{ fontSize: '1.3rem' }} /> <a target='_blank' href={record.repositoryLink?.replace(".git", `/tree/${record.repositoryBranch}`)}>{repository} <OpenInNew className="open-in-new" color={ nirmataColors.blue300} /></a>
    </CellWrapper>
  ),
});

const CellWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: ${nirmataColors.blue300};
    display: flex;
    align-items: center;

    &:hover {
      opacity: .8;
      text-decoration: none;
      transition: .2s ease all;
    }

    > .open-in-new {
      visibility: hidden;
      margin-left: 0.5rem;
      width: 16px;
      height: 16px;
    }

    &:hover > .open-in-new {
      visibility: visible;
    }
  }
`;
