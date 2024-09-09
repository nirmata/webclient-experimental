import { nirmataColors } from "..";
import { DockerOutlined, KubernetesOutlined } from "@ant-design/icons";
import { TeraformIcon } from "../assets/TeraformIcon";
export interface RepTableRow {
  [key: string]: string;
}


export interface FindingDataTableRow{
  key: string,
  finding: string,
  filetypes: Array<string>,
  files: string,
  failed: string,
  passed: string,
  policy?: string,
  severity?: string,
  rule?: string,
  tag: string,
  branchName?: string,
  totalPassed: number,
  message: string,
}

export interface RepRealDataTableRow {
  key: string;
  repository: string;
  filetypes: Array<string>;
  files: number;
  grade: string;
  failed: number;
  warning: number;
  passed: number;
  error: number;
  skipped: number;
}


export interface FindingsInfo {
  key: string;
  finding: string,
  files: string;
  tag: string;
  status: string;
  policy?: string
  rule?: string
}

export interface FileTableRow {
  key: string;
  file?: string;
  findings?: string;
  failed?: string;
  warning?: string;
  passed?: string;
  error?: string;
  skipped?: string;
  findingsInfo?: FindingsInfo[];
  fileType?: any;
}

export const fileTypeIcons: Record<string, JSX.Element> = {
  dockerfile: <DockerOutlined style={{ color: nirmataColors.primaryBlue }} />,
  Kubernetes: <KubernetesOutlined />,
  terraform: <TeraformIcon/>,
  ['terraform-config']:<TeraformIcon/>
};

export const mockFilesData = (): FileTableRow[] => {
  return [
    {
      key: '1',
      file: '.../entinc/ent-repos1/svc1-container',
      findings: '5',
      failed: '120',
      warning: '',
      passed: '180',
      error: '',
      skipped: '',
      findingsInfo: [{
        key: '1',
        finding: 'Some cluster-repo critical finding',
        files: '120',
        status: 'fail',
        tag: 'Critical'
      },
      {
        key: '2',
        finding: 'Some cluster-repo critical finding',
        files: '100',
        status: 'fail',
        tag: 'Critical'
      },
      {
        key: '3',
        finding: 'Some cluster-repo critical finding',
        files: '120',
        status: 'fail',
        tag: 'High'
      },
      {
        key: '4',
        finding: 'Some cluster-repo critical finding',
        files: '120',
        status: 'fail',
        tag: 'Medium'
      },
      ],
    },
    {
      key: '2',
      file: '.../entinc/ent-repos1/svc1-container',
      findings: '5',
      failed: '120',
      warning: '',
      passed: '180',
      error: '',
      skipped: '',
      findingsInfo: []
    },
    {
      key: '3',
      file: '.../entinc/ent-repos1/svc1-container',
      findings: '5',
      failed: '120',
      warning: '',
      passed: '180',
      error: '',
      skipped: '',
      findingsInfo: []
    },
    {
      key: '4',
      file: '.../entinc/ent-repos1/svc1-container',
      findings: '5',
      failed: '120',
      warning: '',
      passed: '180',
      error: '',
      skipped: '',
      findingsInfo: []
    },
    {
      key: '5',
      file: '.../entinc/ent-repos1/svc1-container',
      findings: '5',
      failed: '120',
      warning: '',
      passed: '180',
      error: '',
      skipped: '',
      findingsInfo: []
    },
    {
      key: '6',
      file: '.../entinc/ent-repos1/svc1-container',
      findings: '5',
      failed: '120',
      warning: '',
      passed: '180',
      error: '',
      skipped: '',
      findingsInfo: []
    },
    {
      key: '7',
      file: '.../entinc/ent-repos1/svc1-container',
      findings: '5',
      failed: '120',
      warning: '',
      passed: '180',
      error: '',
      skipped: '',
      findingsInfo: []
    },
    {
      key: '8',
      file: '.../entinc/ent-repos1/svc1-container',
      findings: '5',
      failed: '120',
      warning: '',
      passed: '180',
      error: '',
      skipped: '',
      findingsInfo: []
    },
  ]
}
