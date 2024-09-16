/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TEksClusterConfig from './Cluster.TEksClusterConfig';
import TAksClusterConfig from './Cluster.TAksClusterConfig';
import TGkeClusterConfig from './Cluster.TGkeClusterConfig';
import TOkeClusterConfig from './Cluster.TOkeClusterConfig';
import TNkeClusterConfig from './Cluster.TNkeClusterConfig';
import TTkgAwsClusterConfig from './Cluster.TTkgAwsClusterConfig';
import TTkgVSphereClusterConfig from './Cluster.TTkgVSphereClusterConfig';
import TNodePoolType from './Cluster.TNodePoolType';

export type TField =
  | 'additionalProperties'
  | 'aksConfig'
  | 'alarms'
  | 'allowOverrideCredentials'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'credentials'
  | 'eksConfig'
  | 'fieldsToOverride'
  | 'gkeConfig'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nkeConfig'
  | 'nodePoolTypes'
  | 'okeConfig'
  | 'parent'
  | 'parent'
  | 'service'
  | 'tkgAwsConfig'
  | 'tkgVSphereConfig'
  | 'uri';

type TCloudConfigSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  aksConfig?: TMayBe<TMayBe<TAksClusterConfig>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  allowOverrideCredentials?: TMayBe<boolean>;
  credentials?: TMayBe<TModelBase>;
  eksConfig?: TMayBe<TMayBe<TEksClusterConfig>[]>;
  fieldsToOverride?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  gkeConfig?: TMayBe<TMayBe<TGkeClusterConfig>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CloudConfigSpec';
  nkeConfig?: TMayBe<TMayBe<TNkeClusterConfig>[]>;
  nodePoolTypes?: TMayBe<TMayBe<TNodePoolType>[]>;
  okeConfig?: TMayBe<TMayBe<TOkeClusterConfig>[]>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  tkgAwsConfig?: TMayBe<TMayBe<TTkgAwsClusterConfig>[]>;
  tkgVSphereConfig?: TMayBe<TMayBe<TTkgVSphereClusterConfig>[]>;
};

export default TCloudConfigSpec;
