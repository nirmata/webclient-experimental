/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TVolume from './Environments.TVolume';
import TContainer from './Environments.TContainer';
import TPodSecurityContext from './Environments.TPodSecurityContext';
import TAffinity from './Environments.TAffinity';
import TToleration from './Environments.TToleration';
import THostAlias from './Environments.THostAlias';
import TLocalObjectReference from './Environments.TLocalObjectReference';
import TPodDNSConfig from './Environments.TPodDNSConfig';
import TPodReadinessGate from './Environments.TPodReadinessGate';

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

export type TPodSpec_DnsPolicy = 'Default' | 'ClusterFirst' | 'ClusterFirstWithHostNet' | 'None';

export type TPodSpec_RestartPolicy = 'Always' | 'OnFailure' | 'Never';

type TPodSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  activeDeadlineSeconds?: TMayBe<number>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  affinity?: TMayBe<TMayBe<TAffinity>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  automountServiceAccountToken?: TMayBe<boolean>;
  containers?: TMayBe<TMayBe<TContainer>[]>;
  dnsConfig?: TMayBe<TMayBe<TPodDNSConfig>[]>;
  dnsName?: TMayBe<string>;
  dnsPolicy?: TMayBe<TPodSpec_DnsPolicy>;
  enableServiceLinks?: TMayBe<boolean>;
  hostAliases?: TMayBe<TMayBe<THostAlias>[]>;
  hostIPC?: TMayBe<boolean>;
  hostNetwork?: TMayBe<boolean>;
  hostPID?: TMayBe<boolean>;
  hostname?: TMayBe<string>;
  imagePullSecrets?: TMayBe<TMayBe<TLocalObjectReference>[]>;
  initContainers?: TMayBe<TMayBe<TContainer>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PodSpec';
  nodeName?: TMayBe<string>;
  nodeSelector?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  parent?: TMayBe<TModelBase>;
  priority?: TMayBe<number>;
  priorityClassName?: TMayBe<string>;
  readinessGates?: TMayBe<TMayBe<TPodReadinessGate>[]>;
  restartPolicy?: TMayBe<TPodSpec_RestartPolicy>;
  runtimeClassName?: TMayBe<string>;
  schedulerName?: TMayBe<string>;
  securityContext?: TMayBe<TMayBe<TPodSecurityContext>[]>;
  service?: 'environments';
  serviceAccount?: TMayBe<string>;
  serviceAccountName?: TMayBe<string>;
  shareProcessNamespace?: TMayBe<boolean>;
  subdomain?: TMayBe<string>;
  terminationGracePeriodSeconds?: TMayBe<number>;
  tolerations?: TMayBe<TMayBe<TToleration>[]>;
  volumes?: TMayBe<TMayBe<TVolume>[]>;
};

export default TPodSpec;
