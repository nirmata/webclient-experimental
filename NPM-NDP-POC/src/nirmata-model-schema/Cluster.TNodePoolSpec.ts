/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TAwsNodePoolConfig from './Cluster.TAwsNodePoolConfig';
import TVSphereNodePoolConfig from './Cluster.TVSphereNodePoolConfig';
import TEksNodePoolConfig from './Cluster.TEksNodePoolConfig';
import TAksNodePoolConfig from './Cluster.TAksNodePoolConfig';
import TGkeNodePoolConfig from './Cluster.TGkeNodePoolConfig';
import TOkeNodePoolConfig from './Cluster.TOkeNodePoolConfig';
import TNkeNodePoolConfig from './Cluster.TNkeNodePoolConfig';
import TTkgAwsNodePoolConfig from './Cluster.TTkgAwsNodePoolConfig';
import TTkgVSphereNodePoolConfig from './Cluster.TTkgVSphereNodePoolConfig';
import TTaint from './Cluster.TTaint';

export type TField =
  | 'additionalProperties'
  | 'aksConfig'
  | 'alarms'
  | 'ancestors'
  | 'awsConfig'
  | 'createdBy'
  | 'createdOn'
  | 'eksConfig'
  | 'gkeConfig'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nkeConfig'
  | 'nodeAnnotations'
  | 'nodeLabels'
  | 'okeConfig'
  | 'parent'
  | 'parent'
  | 'service'
  | 'taints'
  | 'tkgAwsConfig'
  | 'tkgVSphereConfig'
  | 'uri'
  | 'vSphereConfig';

type TNodePoolSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  aksConfig?: TMayBe<TMayBe<TAksNodePoolConfig>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  awsConfig?: TMayBe<TMayBe<TAwsNodePoolConfig>[]>;
  eksConfig?: TMayBe<TMayBe<TEksNodePoolConfig>[]>;
  gkeConfig?: TMayBe<TMayBe<TGkeNodePoolConfig>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NodePoolSpec';
  nkeConfig?: TMayBe<TMayBe<TNkeNodePoolConfig>[]>;
  nodeAnnotations?: TMayBe<Record<string, TMayBe<string>>>;
  nodeLabels?: TMayBe<Record<string, TMayBe<string>>>;
  okeConfig?: TMayBe<TMayBe<TOkeNodePoolConfig>[]>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  taints?: TMayBe<TMayBe<TTaint>[]>;
  tkgAwsConfig?: TMayBe<TMayBe<TTkgAwsNodePoolConfig>[]>;
  tkgVSphereConfig?: TMayBe<TMayBe<TTkgVSphereNodePoolConfig>[]>;
  vSphereConfig?: TMayBe<TMayBe<TVSphereNodePoolConfig>[]>;
};

export default TNodePoolSpec;
