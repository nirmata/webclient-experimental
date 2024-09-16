/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'activeDeadlineSeconds'
  | 'additionalProperties'
  | 'affinity'
  | 'alarms'
  | 'ancestors'
  | 'automountServiceAccountToken'
  | 'containers'
  | 'createdBy'
  | 'createdOn'
  | 'dnsConfig'
  | 'dnsName'
  | 'dnsPolicy'
  | 'enableServiceLinks'
  | 'hostAliases'
  | 'hostIPC'
  | 'hostNetwork'
  | 'hostPID'
  | 'hostname'
  | 'id'
  | 'imagePullSecrets'
  | 'initContainers'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nodeName'
  | 'nodeSelector'
  | 'parent'
  | 'parent'
  | 'priority'
  | 'priorityClassName'
  | 'readinessGates'
  | 'restartPolicy'
  | 'runtimeClassName'
  | 'schedulerName'
  | 'securityContext'
  | 'service'
  | 'serviceAccount'
  | 'serviceAccountName'
  | 'shareProcessNamespace'
  | 'subdomain'
  | 'terminationGracePeriodSeconds'
  | 'tolerations'
  | 'uri'
  | 'volumes';

export type TPodSpecData_DnsPolicy = 'Default' | 'ClusterFirst' | 'ClusterFirstWithHostNet' | 'None';

export type TPodSpecData_RestartPolicy = 'Always' | 'OnFailure' | 'Never';

type TPodSpecData = Omit<TModelBase, 'service' | 'modelIndex'> & {
  activeDeadlineSeconds?: TMayBe<number>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  affinity?: TMayBe<object>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  automountServiceAccountToken?: TMayBe<boolean>;
  containers?: TMayBe<object>;
  dnsConfig?: TMayBe<object>;
  dnsName?: TMayBe<string>;
  dnsPolicy?: TMayBe<TPodSpecData_DnsPolicy>;
  enableServiceLinks?: TMayBe<boolean>;
  hostAliases?: TMayBe<object>;
  hostIPC?: TMayBe<boolean>;
  hostNetwork?: TMayBe<boolean>;
  hostPID?: TMayBe<boolean>;
  hostname?: TMayBe<string>;
  imagePullSecrets?: TMayBe<object>;
  initContainers?: TMayBe<object>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PodSpecData';
  nodeName?: TMayBe<string>;
  nodeSelector?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  parent?: TMayBe<TModelBase>;
  priority?: TMayBe<number>;
  priorityClassName?: TMayBe<string>;
  readinessGates?: TMayBe<object>;
  restartPolicy?: TMayBe<TPodSpecData_RestartPolicy>;
  runtimeClassName?: TMayBe<string>;
  schedulerName?: TMayBe<string>;
  securityContext?: TMayBe<object>;
  service?: 'environments';
  serviceAccount?: TMayBe<string>;
  serviceAccountName?: TMayBe<string>;
  shareProcessNamespace?: TMayBe<boolean>;
  subdomain?: TMayBe<string>;
  terminationGracePeriodSeconds?: TMayBe<number>;
  tolerations?: TMayBe<object>;
  volumes?: TMayBe<object>;
};

export default TPodSpecData;
