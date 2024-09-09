import { useMemo } from 'react';
import { v1 } from 'uuid';
import TMayBe from '../connector/TMayBe';

const useConvertToDataSource = <T,>(data: TMayBe<TMayBe<T>[]>, options?: { addId?: boolean }): (T & { _uiId?: string })[] => {
  const dataSource = useMemo<(T & { _uiId?: string })[]>(() => {
    return (data ?? []).reduce<(T & { _uiId?: string })[]>((acc, curr) => {
      if (curr) {
        acc.push({ ...curr, _uiId: options?.addId ? v1() : undefined });
      }
      return acc;
    }, []);
  }, [data]);

  return dataSource;
};

export default useConvertToDataSource;
