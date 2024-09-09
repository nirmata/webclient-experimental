import TMayBe from "./TMayBe";

/** API request headers */
export type THeaders = Record<string, string | number | boolean>;

/** 'normal' | 'export' | 'exportDetails': the normal mode the JSON data for each object contains all attributes and relations are output as links. In the export mode the JSON data contains all attributes and child relation objects are directly embedded into the parent. Reference relations are represented as links, and also contain the unique attributes of the referred to object. The mode parameter can be applied to all GET requests and can be combined with other parameters. The export mode is useful when an entire sub-document needs to be retrieved and stored externally. */
export type TQueryMode = 'normal' | 'export' | 'exportDetails';

/** The query parameter is used to control which objects are included in a JSON response. The query data is specified as a JSON object. The query parameter can be applied to any GET request that returns multiple objects. E.g. { "name": "helloworld" } */
export type TQuery<TField extends string> = Partial<Record<TField, string>>;

export type TQueryModelCollectionArgs<TQueryField extends string, TFieldName extends string> = {
  /** 'normal' | 'export' | 'exportDetails': the normal mode the JSON data for each object contains all attributes and relations are output as links. In the export mode the JSON data contains all attributes and child relation objects are directly embedded into the parent. Reference relations are represented as links, and also contain the unique attributes of the referred to object. The mode parameter can be applied to all GET requests and can be combined with other parameters. The export mode is useful when an entire sub-document needs to be retrieved and stored externally. */
  mode?: TQueryMode,

  /** The query parameter is used to control which objects are included in a JSON response. The query data is specified as a JSON object. The query parameter can be applied to any GET request that returns multiple objects. E.g. { "name": "helloworld" } */
  query?: TQuery<TQueryField>,

  /** The fields parameter is used to control which fields, of an resource, should be included in the JSON response. The fields parameter can be applied to any GET request. The fields parameter value is specified as a single field name, or a comma separated list of field names, that should be included in the response. E.g. fields=['id', 'name', 'kind', 'apiVersion'] */
  fields?: TFieldName[],

  /** The excludeFields parameter is used to exclude one or more fields from the response. The excludeFields parameter can be applied to any GET request. The fields parameter value is specified as a single field name, or a comma separated list of field names, that should be excluded from the response. E.g. excludefields=['metadata', 'spec]*/
  excludeFields?: TFieldName[],

  /** Enable server side pagination */
  paginate?: boolean,

  /** The count parameter is used to specify the maximum number of resources to be returned. It can be used when querying a relation, a list of resources, or using a query parameter. A positive value is expected. When not specified, all matching resources are returned. */
  count?: number,

  /** The start parameter is used to specify the start index in a list of resources. It can be used when querying a relation, a list of resources, or using a query parameter. A positive value is expected. When not specified a value of 0 is assumed. */
  start?: number,

  /** The sort parameter is used to specify the sorting value for a list of resources. */
  sort?: string,
};

export type TQueryModelArgs<TFieldName extends string> = {
  /** 'normal' | 'export' | 'exportDetails': the normal mode the JSON data for each object contains all attributes and relations are output as links. In the export mode the JSON data contains all attributes and child relation objects are directly embedded into the parent. Reference relations are represented as links, and also contain the unique attributes of the referred to object. The mode parameter can be applied to all GET requests and can be combined with other parameters. The export mode is useful when an entire sub-document needs to be retrieved and stored externally. */
  mode?: TQueryMode,

  /** The fields parameter is used to control which fields, of an resource, should be included in the JSON response. The fields parameter can be applied to any GET request. The fields parameter value is specified as a single field name, or a comma separated list of field names, that should be included in the response. E.g. fields=['id', 'name', 'kind', 'apiVersion'] */
  fields?: TFieldName[],

  /** The excludeFields parameter is used to exclude one or more fields from the response. The excludeFields parameter can be applied to any GET request. The fields parameter value is specified as a single field name, or a comma separated list of field names, that should be excluded from the response. E.g. excludefields=['metadata', 'spec]*/
  excludeFields?: TFieldName[],
};

export type TPagination = {
  count?: TMayBe<number>,
  start?: TMayBe<number>,
  total?: TMayBe<number>,
};

export type TPolling = {
  enabled?: TMayBe<boolean>,
  duration?: TMayBe<number>,
};

export type TOptions = {
  headers?: TMayBe<THeaders>,
  polling?: TMayBe<TPolling>,
};

/** API response error */
export type TError = TMayBe<Partial<{
  message?: TMayBe<string>,
}>>;

export type TOnBeforeArgs = {
  url: string,
  data?: any,
  options?: { headers?: TMayBe<THeaders> }
};

/** The hook called before fetch */
export type TOnBefore = (args: TOnBeforeArgs) => void;

export type TOnAfterArgs = {
  url: string,
  data?: any,
  options?: TOptions,
  response?: any,
};

/** The hook called after fetch success */
export type TOnAfter = (args: TOnAfterArgs) => void;

export type TOnErrorArgs = {
  url: string,
  data?: any,
  options?: TOptions,
  error?: any,
};

/** The hook called on fetch error */
export type TOnError = (args: TOnErrorArgs) => void;

export type TPollingConfig = {
  duration?: TMayBe<number>,
};

export type TConnectionContext = {
  rootUrl: string,
  headers?: THeaders,
  polling?: TMayBe<TPollingConfig>,
  onBefore?: TOnBefore,
  onAfter?: TOnAfter,
  onError?: TOnError,
};

export type THooks = {
  onBefore?: TOnBefore,
  onAfter?: TOnAfter,
  onError?: TOnError,
};
