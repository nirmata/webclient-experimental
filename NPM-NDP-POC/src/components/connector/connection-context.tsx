import React from 'react';
import { TConnectionContext } from './types';

const ConnectionContext = React.createContext<TConnectionContext>({
  rootUrl: '',
  headers: undefined,
  polling: {
    duration: 30000,
  },
  onBefore: () => undefined,
  onAfter: () => undefined,
  onError: () => undefined,
});

export default ConnectionContext;
