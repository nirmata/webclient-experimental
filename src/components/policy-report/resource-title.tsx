import React from 'react';
import TMayBe from '../../../nirmata-model-schema/TMayBe';
import { emptyFallbackValue } from '../../constants';
import Typography from '../../components/typography';
import getClassNames from '../../theme/get-class-names';
import If from '../if';
import DataTestId from '../data-test-id';
import { ResourceKindTag } from './resource-kind-tag';

const ResourceTitle: React.FC<{
  kind?: TMayBe<string>;
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
}> = ({ kind, name }) => {
  return (
    <div
      className={getClassNames(['n-flex', 'n-flex-row', 'n-align-items-center', 'n-gap-2'])}
      style={{ maxWidth: '22em' }}
    >
      <If condition={Boolean(kind)}>
        <If.True>
          <DataTestId value='title-resource-kind'>
            {(dataTestAttribute) => <ResourceKindTag {...dataTestAttribute} kind={kind}/>}
          </DataTestId>
        </If.True>
      </If>
      <DataTestId value='title-resource-name'>
        {(dataTestAttribute) => (
          <Typography.Title {...dataTestAttribute} style={{ margin: 0 }} level={2}>
            {name ?? emptyFallbackValue}
          </Typography.Title>
        )}
      </DataTestId>
    </div>
  );
};

export default ResourceTitle;
