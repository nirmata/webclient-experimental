import { RepRealDataTableRow } from '../../../components/componentsV2/types';
import { GithubOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { nirmataColors } from '../../../components/componentsV2';
import { Link } from 'react-router-dom';

const StyledColumn = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    span{
      font-size: 1.25rem;
    }
    a{
      color: ${nirmataColors.blue300};
      &:hover{
        opacity: .8;
        text-decoration: none;
        transition: .2s ease all;
      }
    }
`;

export const getColumnRepositoryProps = (): ColumnType<RepRealDataTableRow> => ({
  key: 'source-id',
  title: 'Repository',
  dataIndex: 'repository',
  sorter: true,
  render: (title) => {
    const repositoryTitle = title.split('/').pop().split('.') || '';
    return (
      <StyledColumn>
        <GithubOutlined />
        <Link  to={`/clusters/policyReport/repositoryDetails?repo=${title}`}>
          {repositoryTitle?.[0]??''}
        </Link>
      </StyledColumn>
    );
  }
});
