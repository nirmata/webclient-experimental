import { nirmataColors } from '../../../components/componentsV2';
import { OpenInNew } from "../../../components/componentsV2/assets/OpenInNew";
import { RepoFindingsTableRow } from '../../data';
import { DockerOutlined, KubernetesOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';

const fileTypeIcons: Record<string, JSX.Element> = {
  Docker: <DockerOutlined style={{ color: nirmataColors.primaryBlue, fontSize: '1.5rem' }} />,
  Kubernetes: <KubernetesOutlined style={{ color: nirmataColors.primaryBlue, fontSize: '1.5rem' }} />,
};

const getFileTypeIcon = (filetype: string) => {
  return fileTypeIcons[filetype];
};

export const getColumnFileProps = (): ColumnType<RepoFindingsTableRow> => ({
  title: 'File',
  dataIndex: 'file',
  key: 'labels.policies.nirmata.io/resource-id',
  showSorterTooltip: false,
  sorter: true,
  render: (_: string, record) => (
    <CellWrapper>
      {getFileTypeIcon(record.filetype)} 
      <a href={record.repositoryLink?.replace(".git", `/blob/${record.repositoryBranch}/${record.repositoryFile}`)} target="_blank" rel="noopener noreferrer">
        {record.repositoryFile}
        <OpenInNew className="open-in-new" color={ nirmataColors.blue300} />
      </a>
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

    &:hover{
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
