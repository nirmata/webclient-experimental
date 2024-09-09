import React from 'react';
import FilterOutlined from '@ant-design/icons/FilterOutlined';
import getClassNames from '../../theme/get-class-names';

type TCountLableProps = {
  loading?: boolean;
  hasFilters?: boolean;
  filteredCount?: number;
  totalCount?: number;
  label?: string;
};

const CountLabel: React.FC<TCountLableProps> = (props) => {
  const { loading, hasFilters, filteredCount, totalCount } = props;

  const finalLabel = props.label ?? 'entries';

  if (loading) return null

  return (
    <div data-testid="filter-count-label" className='n-p-l-2 n-p-r-2 n-p-t-1 n-p-b-1'>
      {Boolean(!hasFilters || totalCount === 0) && <span>{`${totalCount} ${finalLabel}`}</span>}
      {Boolean(hasFilters && totalCount !== 0) && (
        <div className={getClassNames(['n-flex', 'n-align-items-center', 'n-gap-2'])}>
          <FilterOutlined />
          <span>{`Filtered ${filteredCount ?? 0} of ${totalCount ?? 0} ${finalLabel}`}</span>
        </div>
      )}
    </div>
  );
};

export default CountLabel;
