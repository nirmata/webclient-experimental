import React from "react";
import Tag, { TagProps } from "antd/es/tag";
import TMayBe from "../../connector/TMayBe";
import getClassNames from "../../../theme/get-class-names";
import { Tooltip } from "antd";

const resourceKindShortNameRecord: Record<string, string> = {
  deployment: "deploy",
  pod: "po",
  replicaset: "rs",
  cronjob: "cj",
  daemonset: "ds",
  clusterrole: "cr",
  clusterrolebinding: "crb",
  rolebinding: "rb",
  role: "role",
  componentstatuse: "cs",
  configmap: "cm",
  endpoint: "ep",
  event: "ev",
  ingress: "ing",
  job: "job",
  limitrange: "limits",
  namespace: "ns",
  node: "no",
  persistentvolumeclaim: "pvc",
  persistentvolume: "pv",
  podsecuritypolicie: "psp",
  podtemplate: "",
  replicationcontroller: "rc",
  resourcequota: "quota",
  service: "svc",
  statefulset: "sts",
  storageclass: "sc",
  task: "task",
};

type TResourceKindTag = TagProps & { kind?: TMayBe<string> };

const ResourceKindTag: React.FC<TResourceKindTag> = ({ kind, ...props }) => {
  let resourceKindShortHand = kind
    ? resourceKindShortNameRecord[kind.toLowerCase()]
    : "";
  if (kind?.startsWith("ecs")) resourceKindShortHand = "ecs";

  return (
    <Tooltip placement="top" title={kind}>
      <Tag
        className={getClassNames([
          "n-gray-8",
          "n-bg-gray-2",
          "n-border-radius-lg",
          "n-border-gray-4",
        ])}
        style={{ padding: "2px 8px" }}
        {...props}
      >
        {resourceKindShortHand}
      </Tag>
    </Tooltip>
  );
};

export { ResourceKindTag };
export type { TResourceKindTag };
