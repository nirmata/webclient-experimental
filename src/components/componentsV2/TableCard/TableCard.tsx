import styled from 'styled-components';
import { Card as AntdCard, CardProps, Skeleton } from 'antd';
import { FC } from 'react';
import { SeverityTag, SeverityTagVariant, StatusTag } from '..';
import { StatusTagVariant } from '../Tag/StatusTag';
import { Message } from '../../table/columns/policy-report/result/message';
import { FindingsInfo } from '../types';
import { nirmataColors } from '../assets/global';

const StyledCard = styled(AntdCard)`
  border-radius: 8px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 0 1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 0 2px rgba(0, 0, 0, 0.1);
  }

  .ant-card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px;
    &::before{
      content: none;
    }
    &::after{
      content: none;
    }
    a{
    color: ${nirmataColors.blue300};
      &:hover{
        opacity: .8;
        text-decoration: none;
        transition: .2s ease all;
      }
    }
  }
`;

const StatusTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 21rem;
  width: 100%;
`

const SeverityTagWrapper = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
  width: fit-content;
`

interface TableCardProps extends CardProps {
  info: FindingsInfo;
  repo?: string;
  loading?: boolean;
}

export const TableCard: FC<TableCardProps> = ({ info, repo, loading = false, ...rest }) => {
  return (
    <StyledCard {...rest}>
      {loading
        ? <Skeleton.Button active block />
        :<>
          <SeverityTagWrapper>
            <SeverityTag variant={info.tag as SeverityTagVariant} width='4rem'>
              {(info.tag)}
            </SeverityTag>
            <Message.Link
              message={info.finding}
              style={{ width: '330px', marginRight: '50px' }}
              href={`#clusters/policyReport/findingDetails?repo=${repo}&policy=${info.policy}&rule=${info.rule}&severity=${info.tag}`}
            />
          </SeverityTagWrapper>
          <span>Affects {info.files} files in this repo</span>
          <StatusTagWrapper>
            <StatusTag size='SMALL' className='statusTag' variant={info.status as StatusTagVariant}>
              {info.status}
            </StatusTag>
          </StatusTagWrapper>
        </>
      }
    </StyledCard>
  );
};
