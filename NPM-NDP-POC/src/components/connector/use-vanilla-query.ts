import axios from 'axios';
import { useCallback, useContext } from 'react';
import TMayBe from './TMayBe';
import ConnectionContext from './connection-context';
import { THooks, TOptions } from './types';

export type TOnLoad<T> = (
  url: string,
  options?: TOptions,
  hooks?: THooks,
) => Promise<TMayBe<{ data?: TMayBe<T> }>>;

const useVanillaQuery = <T>(): TOnLoad<T> => {
  const connContext = useContext(ConnectionContext);

  const onLoad: TOnLoad<T> = useCallback((url, options, hooks) => {
    if (url) {
      const queryUrl = /^http/i.test(url) ? url : [connContext.rootUrl, url.replace(/^\//, '')].join('/');

      const combinedOptions = {
        ...(options ?? {}),
        headers: {
          ...connContext.headers,
          ...(options?.headers ?? {}),
        },
      };

      const onBeforeArgs = {
        url: queryUrl,
        options: combinedOptions,
      };
      if (hooks?.onBefore) {
        hooks.onBefore(onBeforeArgs);
      }
      if (connContext.onBefore) {
        connContext.onBefore(onBeforeArgs);
      }

      return axios.get<TMayBe<T>>(queryUrl, { headers: combinedOptions?.headers ?? undefined })
        .then((response) => {
          const onAfterArgs = {
            url: queryUrl,
            options: combinedOptions,
            response,
          };
          if (hooks?.onAfter) {
            hooks.onAfter(onAfterArgs);
          }
          if (connContext.onAfter) {
            connContext.onAfter(onAfterArgs);
          }

          return Promise.resolve({ data: response.data });
        })
        .catch((error: any) => {
          const onErrorArgs = {
            url: queryUrl,
            options: combinedOptions,
            error,
          };
          if (hooks?.onError) {
            hooks.onError(onErrorArgs);
          }
          if (connContext.onError) {
            connContext.onError(onErrorArgs);
          }

          // Redirect to logout on unauthorized response
          if (error?.response?.status == 401) window.location.hash = '#logout'

          return Promise.reject(error);
        });
    }

    return Promise.reject(new Error('Url missing!'));
  }, []);

  return onLoad;
};

export default useVanillaQuery;
