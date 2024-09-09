import { Card, Row } from 'antd';
import styled from 'styled-components';
import { nirmataColors } from '../../components/componentsV2';
import { TImpactedResourceResponse } from './types';
import { SeverityTagVariant, severityTagColor } from '../../components/componentsV2/Tag/SeverityTag';
import getClassNames from '../../theme/get-class-names';

export const InfoCards = ({data}:{data:  TImpactedResourceResponse}) => {
  let policy, rule, severity, category;
  
  if(data){
    policy = data?.entries?.[0]?.policy??'';
    rule = data?.entries?.[0]?.rule??'';
    severity = data?.entries?.[0]?.severity??'';
    category = data?.entries?.[0]?.category?.[0]??''

  }

  return (
    <InfoCardsWrapper>
      <Row gutter={16}>
        {/* <Col span={12}> */}

          <Card title='Attributes' size='small' bordered={false}>
            <AttributesCardWrapper>
              <div style={{display:'flex', flexDirection:'column', rowGap: '1rem'}}>
                 <div><TertiaryText>Category</TertiaryText> <span>{category ?? ''}</span> </div> 
                 <div> <TertiaryText>Policy</TertiaryText> <span>{policy ?? ''}</span> </div>
                 <div> <TertiaryText>Scope</TertiaryText> <span>Repo</span> </div>
              </div>

              <div  style={{display:'flex', flexDirection:'column', rowGap: '1rem'}}>
                 <div> <TertiaryText>Severity</TertiaryText><span className={getClassNames(['n-m-l-1'])}><SeverityText severityVariant={severity as SeverityTagVariant}>{severity ?? ''}</SeverityText></span> </div>
                  <div><TertiaryText>Rule</TertiaryText><span> {rule ?? ''}</span></div>
                  <div><TertiaryText>Source</TertiaryText><span> Github Action</span></div>
              </div>
            </AttributesCardWrapper>
          </Card>
        {/* </Col> */}
      </Row>
    </InfoCardsWrapper>
  );
};

const InfoCardsWrapper = styled.div`
  margin: 1rem;

  .ant-col {
    padding-left: 0 !important;
    padding-right: 0 !important;

    .ant-card {
      height: 100%;
      box-shadow: none;
      padding: 0.5rem 20px;
      border-right: 1px #f0f0f0 solid;
      border-radius: 0;
    }

    &:last-of-type > .ant-card {
      border-right: none;
    }
  }
`;

const AttributesCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  a{
    color: ${nirmataColors.blue300};
    &:hover{
      opacity: .8;
      text-decoration: none;
      transition: .2s ease all;
    }
  }
`;

const TertiaryText = styled.span`
  color: ${nirmataColors.colorTextTertiary};
`;

const SeverityText = styled.span<{ severityVariant: SeverityTagVariant }>`
  color: ${({ severityVariant }) => severityTagColor[severityVariant]};
`;

// const Italic = styled.span`
//   font-style: italic;
//   margin-right: 0.5rem;
//   display: inline-block;
// `;
