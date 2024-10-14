import React, { createContext, useContext, useState } from 'react';

type TContext = string | undefined;

const Context = createContext<TContext>(undefined);

export const dataTestIdKey = 'data-testid';

export const joinDataTestIds = (values: (string | null | undefined)[]): string => {
  return values.filter(Boolean).join('.');
};

const DataTestId: React.FC<{
  children: (props: { 'data-testid': string }) => React.ReactNode,
  value?: string,
}> = ({ children, value }) => {
  const parentValue = useContext(Context);
  const [contextValue] = useState(joinDataTestIds([parentValue, value]));
  const [childrenProps] = useState({ 'data-testid': contextValue });

  return (
    <Context.Provider value={contextValue}>
      {children(childrenProps)}
    </Context.Provider>
  );
};

export default DataTestId;
