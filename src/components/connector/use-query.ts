import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import TMayBe from './TMayBe';
import useDidUnmount from '../hooks/use-did-unmount';
import ConnectionContext from './connection-context';
import { TError, THooks, TOptions } from './types';
import useVanillaQuery from './use-vanilla-query';

export type TOnLoad<T> = (
  url: string,
  options?: TOptions,
  hooks?: THooks,
) => Promise<TMayBe<{ data?: TMayBe<T> }>>;

export type TOnReload<T> = () => Promise<TMayBe<{ data?: TMayBe<T> }>>;

export type TState<T> = {
  loading: boolean,
  reLoading: boolean,
  data: TMayBe<T>,
  error: TMayBe<TError>,
};

export type TReturn<T> = [
  TState<T>,
  {
    onLoad: TOnLoad<T>,
    onReload: TOnReload<T>,
    onStartPolling: (duration?: TMayBe<number>) => void,
    onStopPolling: () => void,
  },
];

const useQuery = <T>(): TReturn<T> => {
  const query = useVanillaQuery<T>();
  const didUnmount = useDidUnmount();
  const connContext = useContext(ConnectionContext);
  const refPollingON = useRef<boolean>(false);
  const refPollingTimeout = useRef<NodeJS.Timeout>();

  const [state, setState] = useState<TState<T>>({
    loading: false,
    reLoading: false,
    data: undefined,
    error: undefined,
  });

  const refLastAPICallArgs = useRef<{
    url: string,
    options?: TOptions,
    hooks?: THooks,
  }>({ url: '' });

  const _onLoad: TOnLoad<T> = useCallback((url, options, hooks) => {
    if (url) {
      return query(url, { headers: options?.headers ?? undefined }, hooks)
        .then((response) => {
          if (!didUnmount()) {
            setState(() => {
              return {
                loading: false,
                reLoading: false,
                data: response?.data,
                error: undefined,
              };
            });
          }

          return Promise.resolve({ data: response?.data });
        })
        .catch((error: any) => {
          if (!didUnmount()) {
            setState((currentState) => {
              return {
                loading: false,
                reLoading: false,
                data: currentState.data,
                error,
              };
            });
          }

          return Promise.reject(error);
        });
    }

    setState((currentState) => {
      return {
        loading: false,
        reLoading: false,
        data: currentState.data,
        error: undefined,
      };
    });

    return Promise.resolve({ data: state.data });
  }, []);

  const onClearPollingInterval = useCallback(() => {
    clearTimeout(refPollingTimeout.current);
  }, []);

  const onPollNext = useCallback((duration?: TMayBe<number>) => {
    onClearPollingInterval();
    refPollingON.current = true;

    const derivedDuration = duration ?? connContext.polling?.duration ?? 30000;

    if ((derivedDuration ?? 0) > 999) {
      refPollingTimeout.current = setTimeout(() => {
        if (!didUnmount()) {
          setState((currentState) => {
            return {
              loading: false,
              reLoading: true,
              data: currentState.data,
              error: undefined,
            };
          });

          _onLoad(refLastAPICallArgs.current.url, refLastAPICallArgs.current.options, refLastAPICallArgs.current.hooks)
            .finally(() => {
              if (!didUnmount() && refPollingON.current) {
                onPollNext(derivedDuration);
              }
            });
        }
      }, derivedDuration);
    }
  }, []);

  const onStopPolling = useCallback(() => {
    onClearPollingInterval();
    refPollingON.current = false;
  }, []);

  const onStartPolling = useCallback((duration?: TMayBe<number>) => {
    onPollNext(duration);
  }, []);

  const onLoad: TOnLoad<T> = useCallback((url, options, hooks) => {
    onClearPollingInterval();

    refLastAPICallArgs.current = { url, options, hooks };

    setState((currentState) => {
      return {
        loading: true,
        reLoading: false,
        data: currentState.data,
        error: undefined,
      };
    });

    return _onLoad(url, options, hooks)
      .finally(() => {
        if (!didUnmount() && options?.polling?.enabled) {
          onPollNext(options.polling?.duration);
        }
      });
  }, []);

  const onReload: TOnReload<T> = useCallback(() => {
    onClearPollingInterval();

    setState((currentState) => {
      return {
        loading: false,
        reLoading: true,
        data: currentState.data,
        error: undefined,
      };
    });

    return _onLoad(refLastAPICallArgs.current.url, refLastAPICallArgs.current.options, refLastAPICallArgs.current.hooks)
      .finally(() => {
        if (!didUnmount() && refLastAPICallArgs.current.options?.polling?.enabled) {
          onPollNext(refLastAPICallArgs.current.options.polling?.duration);
        }
      });
  }, []);

  useEffect(() => {
    return () => {
      onStopPolling();
    };
  }, []);

  return [
    state,
    {
      onLoad,
      onReload,
      onStartPolling,
      onStopPolling,
    }
  ];
};

export default useQuery;
