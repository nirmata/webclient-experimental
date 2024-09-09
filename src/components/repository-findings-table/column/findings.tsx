import type { ColumnType } from "antd/es/table";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FindingDataTableRow } from "../../../components/componentsV2/types";
import {
  SeverityTag,
  SeverityTagVariant,
  nirmataColors,
} from "../../../components/componentsV2";
import { Typography } from "antd";

const StyledColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  a {
    color: ${nirmataColors.blue300};
    &:hover {
      opacity: 0.8;
      text-decoration: none;
      transition: 0.2s ease all;
    }
  }
`;

export const getColumnFindingsProps = (): ColumnType<FindingDataTableRow> => ({
  key: "_id.severity",
  title: "Findings",
  dataIndex: "finding",
  sorter: true,
  defaultSortOrder: "descend",
  render: (_, record) => {
    // const { search } = useLocation();
    // const searchParams = new URLSearchParams(search);
    // const repo = searchParams.get('repo');
    const repo = "https://github.com/dtoledo67/payment-service.git";

    return (
      <StyledColumn>
        <SeverityTag
          variant={record.tag as SeverityTagVariant}
          style={{ minWidth: "4rem" }}
        >
          {record.tag}
        </SeverityTag>
        <Typography.Text
          ellipsis={{ tooltip: record.finding }}
          style={{ maxWidth: "50vw" }}
        >
          <Link
            replace={true}
            to={`findingDetails?repo=${repo}&policy=${record.policy}&rule=${record.rule}&severity=${record.severity}&branch=${record.branchName}&message=${record.message}`}
          >
            {record.finding ?? ""}
          </Link>
        </Typography.Text>
      </StyledColumn>
    );
  },
});
