import axios from 'axios';
import { useCallback, useContext, useState } from 'react';
import TMayBe from './TMayBe';
import useDidUnmount from '../hooks/use-did-unmount';
import ConnectionContext from './connection-context';
import { TError, THooks, TOptions } from './types';

export type TOnPost<T> = (
  url: string,
  data?: TMayBe<T>,
  options?: TOptions,
  hooks?: THooks,
) => Promise<{ data: TMayBe<T> }>;

export type TState<T> = {
  loading: boolean,
  data: TMayBe<T>,
  error: TMayBe<TError>,
};

export type TReturn<T> = [
  TState<T>,
  {
    onPost: TOnPost<T>,
  },
];

const usePost = <T>(): TReturn<T> => {
  const didUnmount = useDidUnmount();
  const connContext = useContext(ConnectionContext);

  const [state, setState] = useState<TState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const onPost: TOnPost<T> = useCallback((url, data, options, hooks) => {
    const combinedHeader = { ...connContext.headers, ...options?.headers };

    const onBeforeArgs = {
      url,
      data,
      options: { headers: combinedHeader },
    };
    if (hooks?.onBefore) {
      hooks.onBefore(onBeforeArgs);
    }
    if (connContext.onBefore) {
      connContext.onBefore(onBeforeArgs);
    }

    setState((currentState) => {
      return {
        loading: true,
        data: currentState.data,
        error: undefined,
      };
    });

    return axios.post<TMayBe<T>>(url, data, { headers: combinedHeader })
      .then((response) => {
        if (!didUnmount()) {
          setState(() => {
            return {
              loading: false,
              data: response.data,
              error: undefined,
            };
          });

          const onAfterArgs = {
            url,
            data: response.data,
            options: { headers: combinedHeader },
            response,
          };
          if (hooks?.onAfter) {
            hooks.onAfter(onAfterArgs);
          }
          if (connContext.onAfter) {
            connContext.onAfter(onAfterArgs);
          }
        }

        return Promise.resolve({
          data: response.data,
        });
      })
      .catch((error: any) => {
        if (!didUnmount()) {
          setState((currentState) => {
            return {
              loading: false,
              data: currentState.data,
              error,
            };
          });

          const onErrorArgs = {
            url: url,
            data,
            options: { headers: combinedHeader },
            error: error,
          };
          if (hooks?.onError) {
            hooks.onError(onErrorArgs);
          }
          if (connContext.onError) {
            connContext.onError(onErrorArgs);
          }
        }

        return Promise.reject(error);
      });
  }, []);

  return [
    state,
    {
      onPost,
    }
  ];
};

export default usePost;
