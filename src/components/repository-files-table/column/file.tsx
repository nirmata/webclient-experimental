import { FileTableRow } from '../../componentsV2/types';
import type { ColumnType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { nirmataColors } from '../../componentsV2';
import { DockerOutlined, KubernetesOutlined } from '@ant-design/icons';

const StyledColumn = styled('div')`
    display: flex;
    align-items: center;

    .icon {
      margin-right: 8px;
    }

    a {
      color: ${nirmataColors.blue300};
      &:hover {
        opacity: .8;
        text-decoration: none;
        transition: .2s ease all;
      }
    }
`;

const fileTypeIcons: Record<string, JSX.Element> = {
  'dockerfile': <DockerOutlined className="icon" style={{ color: nirmataColors.primaryBlue, fontSize: '1.5rem' }} />,
  'terraform-config': <KubernetesOutlined className="icon" style={{ color: nirmataColors.primaryBlue, fontSize: '1.5rem' }} />,
  'terraform': <KubernetesOutlined className="icon" style={{ color: nirmataColors.primaryBlue, fontSize: '1.5rem' }} />

};

const getFileTypeIcon = (filetype: string) => {
  return fileTypeIcons[filetype];
};

export const getColumnFileProps = (): ColumnType<FileTableRow> => ({
  key: 'resource-id',
  title: 'File',
  dataIndex: 'file',
  sorter: true,
  render: (title, record) => {
    const url = window.location.href;
    const params = new URLSearchParams(url.split('?')[1]);
    const repoValue = params.get('repo');
    const severityValue = params.get('severity');
    const branchValue = params.get('branch');

    return (
      <StyledColumn>

        {getFileTypeIcon(record.fileType)} 
        <Link replace={true} to={`/clusters/policyReport/fileFindings?repo=${repoValue}&file=${record.file}${severityValue && severityValue.length > 0 ? `&severity=${severityValue}` : ''}${branchValue && branchValue.length > 0 ? `&branch=${branchValue}` : ''}`}>
          {title}
        </Link>
      </StyledColumn>
    )
  },
});
