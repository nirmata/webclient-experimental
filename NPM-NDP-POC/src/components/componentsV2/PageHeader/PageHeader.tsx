import { Button, Select, SeverityTag, SeverityTagVariant } from './../../componentsV2';
import { ClockCircleOutlined, EditOutlined, GithubOutlined, MoreOutlined, SyncOutlined } from "@ant-design/icons";
import { SelectProps, Tooltip, Typography } from "antd";
import { FC, useState } from "react";
import styled from "styled-components";
import { nirmataColors } from "../assets/global";
import { fileTypeIcons } from "../types";
import { OpenInNew } from "../assets/OpenInNew";

enum PageHeaderVariant {
  REPORTS = 'REPORTS',
  REPOSITORIES = 'REPOSITORIES',
  FILE = 'FILE',
  FINDING = 'FINDING',
}

interface PageHeaderProps {
  variant?: keyof typeof PageHeaderVariant;
  url?: string;
  filetype?: string;
  title: string;
  tag?: SeverityTagVariant;
  branchNameOptions?: SelectProps['options'],
  onBranchNameChange?: any,
  onScanRefresh?: any,
  defaultValue?: string,
}

const StyledTitle = styled.h3`
  margin: 0;
  color: ${nirmataColors.defaultColor};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
`;

const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ant-btn-primary{
    box-shadow: none;
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .anticon:not(.ant-select-suffix, .anticon-close){
    font-size: 2.5rem;
  }
  
  .anticon-open-in-new{
    transition: .2s ease all;
    &:hover{
      opacity: .8;
    }
  }
`;

export const PageHeader: FC<PageHeaderProps> = ({ title, variant, url, filetype = '', onScanRefresh, defaultValue,branchNameOptions,tag ,onBranchNameChange }) => {
  const icon = fileTypeIcons[filetype];
  const severityTag = (tag && (SeverityTagVariant[tag.toUpperCase() as keyof typeof SeverityTagVariant])) || SeverityTagVariant.LOW;
  const [selectedBranch, setSelectedBranch] = useState(defaultValue as string[] | string);

  const handleBranchChange = (value: string) => {
    setSelectedBranch(value);
  };
  const handleOpenInNewClick = () => {
    if (url) {
      if(selectedBranch.length > 0){
        url = url?.replace(".git", `/tree/${selectedBranch}`);
      }
      window.open(url, '_blank');
    }
  };


  return (
    <>
      <StyledPageHeader>
        <StyledInfoWrapper>
        {variant === PageHeaderVariant.FINDING ? (
            <SeverityTag style={{marginBottom:'6px'}} width='4rem' variant={severityTag}>{severityTag}</SeverityTag>
          ) : (
            <></>
          )}
          {variant === PageHeaderVariant.REPOSITORIES
            ? <GithubOutlined />
            : variant === PageHeaderVariant.FILE
              ? icon
              : <></>
          }
          <StyledTitle>
          <Typography.Title  level={4}  ellipsis={{ tooltip: title }} style={{ maxWidth: '60vw' }}>
            {title}
          </Typography.Title>
            </StyledTitle>
          {variant === PageHeaderVariant.REPOSITORIES || variant === PageHeaderVariant.FILE
            ?
            (
              <>
                <Select
                  showSearch
                  style={{ width: '100%', maxWidth: 'fit-content', minWidth: '9rem' }}
                  placeholder="Select branch"
                  optionLabelProp="label"
                  options={ branchNameOptions??[]}
                  onChange={(value)=>{
                    onBranchNameChange(value);
                    handleBranchChange(value);
                  }}
                  defaultValue={defaultValue??''}

                />
                <Tooltip title={url}>
                <div onClick={handleOpenInNewClick}>
                    <OpenInNew color={ nirmataColors.blue300} />
                  </div>
                </Tooltip>
              </>
            )
            :
            <></>
          }

        </StyledInfoWrapper>
        {variant === PageHeaderVariant.REPORTS
          &&
          (<Button.Group>
            <Button type="primary" color="white" icon={<EditOutlined />}>Policies</Button>
            <Button icon={<ClockCircleOutlined />}>Scheduled Reports</Button>
            <Button icon={<SyncOutlined />} /> 
            <Button icon={<MoreOutlined />} />
          </Button.Group>)
        }

        {variant === PageHeaderVariant.REPOSITORIES && <Button icon={<SyncOutlined onClick={onScanRefresh} />} />}
      </StyledPageHeader>
    </>
  );
};