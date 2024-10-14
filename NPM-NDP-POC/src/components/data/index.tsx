import { TeraformIcon } from '../componentsV2/assets/TeraformIcon';
import { nirmataColors } from './../componentsV2';
import { DockerOutlined, KubernetesOutlined } from '@ant-design/icons';

export interface RepTableRow {
  [key: string]: string;
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

export const fileTypeIcons: Record<string, JSX.Element> = {
  Dockerfile: <DockerOutlined style={{ color: nirmataColors.primaryBlue }} />,
  Kubernetes: <KubernetesOutlined />,
  ['terraform-config']:<TeraformIcon/>
};

export interface FindingsInfo {
  key: string;
  finding: string;
  files: string;
  tag: string;
  status: string;
}

export interface FileTableRow {
  key: string;
  file: string;
  findings: string;
  failed: string;
  warning: string;
  passed: string;
  error: string;
  skipped: string;
  findingsInfo: FindingsInfo[];
}

export interface RepoFindingsTableRow {
  key: string;
  file: string;
  filetype: string;
  repository: string;
  repositoryLink?: string;
  repositoryBranch?: string;
  repositoryFile?: string;
  status: string;
}

export const jsonData = {
  total: 2,
  entries: [
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-23.git',
      },
      result: {
        pass: 20,
        fail: 30,
      },
      'resource-type': {
        Dockerfile: 50,
        Kubernetes: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'D',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-23.git',
      },
      result: {
        pass: 20,
        fail: 30,
      },
      'resource-type': {
        Dockerfile: 50,
        Kubernetes: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'D',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-23.git',
      },
      result: {
        pass: 20,
        fail: 30,
      },
      'resource-type': {
        Dockerfile: 50,
        Kubernetes: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'D',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-23.git',
      },
      result: {
        pass: 20,
        fail: 30,
      },
      'resource-type': {
        Dockerfile: 50,
        Kubernetes: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'D',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-23.git',
      },
      result: {
        pass: 20,
        fail: 30,
      },
      'resource-type': {
        Dockerfile: 50,
        Kubernetes: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'D',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-23.git',
      },
      result: {
        pass: 20,
        fail: 30,
      },
      'resource-type': {
        Dockerfile: 50,
        Kubernetes: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'F',
    },
    {
      _id: {
        'source-id': 'https://github.com/my-company/java-service-94.git',
      },
      result: {
        fail: 30,
        pass: 20,
      },
      'resource-type': {
        Dockerfile: 50,
      },
      'resource-id': {
        'docker/Dockerfile': 50,
      },
      grade: 'D',
    },
  ],
  start: 0,
  count: 20,
};

export const mockRepoData = (): RepTableRow[] => {
  return [
    {
      key: '1',
      repository: 'ent-repos1',
      filetypes: 'doc, kub',
      files: '300',
      grade: 'D+',
      failed: '',
      warning: '25',
      passed: '225',
      error: '25',
      skipped: '25',
    },
    {
      key: '2',
      repository: 'ent-repos2',
      filetypes: 'doc, kub',
      files: '100',
      grade: 'C+',
      failed: '35',
      warning: '',
      passed: '65',
      error: '',
      skipped: '',
    },
    {
      key: '3',
      repository: 'ent-repos3',
      filetypes: 'doc',
      files: '100',
      grade: 'B',
      failed: '17',
      warning: '',
      passed: '83',
      error: '',
      skipped: '',
    },
  ];
};

export const mockFindingsData = (): RepTableRow[] => {
  return [
    {
      key: '1',
      finding: 'Some cluster-repo critical finding',
      filetypes: 'doc, kub',
      files: '300',
      failed: '',
      passed: '225',
      tag: 'Critical',
    },
    {
      key: '2',
      finding: 'Some repo-only high finding',
      filetypes: 'doc',
      files: '200',
      failed: '25',
      passed: '120',
      tag: 'Medium',
    },
  ];
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
      findingsInfo: [
        {
          key: '1',
          finding: 'Some cluster-repo critical finding',
          files: '120',
          status: 'fail',
          tag: 'Critical',
        },
        {
          key: '2',
          finding: 'Some cluster-repo critical finding',
          files: '100',
          status: 'fail',
          tag: 'Critical',
        },
        {
          key: '3',
          finding: 'Some cluster-repo critical finding',
          files: '120',
          status: 'fail',
          tag: 'High',
        },
        {
          key: '4',
          finding: 'Some cluster-repo critical finding',
          files: '120',
          status: 'fail',
          tag: 'Medium',
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
      findingsInfo: [],
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
      findingsInfo: [],
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
      findingsInfo: [],
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
      findingsInfo: [],
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
      findingsInfo: [],
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
      findingsInfo: [],
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
      findingsInfo: [],
    },
  ];
};

export const mockFilesFindingData = (): FindingsInfo[] => {
  return [
    {
      key: '1',
      finding: 'Some cluster-repo critical finding',
      files: '120',
      status: 'fail',
      tag: 'Critical',
    },
    {
      key: '2',
      finding: 'Some cluster-repo critical finding',
      files: '120',
      status: 'fail',
      tag: 'Critical',
    },
    {
      key: '3',
      finding: 'Some cluster-repo critical finding',
      files: '120',
      status: 'fail',
      tag: 'High',
    },
    {
      key: '4',
      finding: 'Some cluster-repo critical finding',
      files: '120',
      status: 'fail',
      tag: 'High',
    },
    {
      key: '5',
      finding: 'Some cluster-repo critical finding',
      files: '120',
      status: 'fail',
      tag: 'Medium',
    },
    {
      key: '6',
      finding: 'Some cluster-repo critical finding',
      files: '120',
      status: 'fail',
      tag: 'Low',
    },
  ];
};

export const mockRepoFindingsData = (): RepoFindingsTableRow[] => {
  return [
    {
      key: '1',
      file: '.../entinc/ent-repos1/svc1-container',
      repository: 'ent-repos1',
      status: 'Failed',
      filetype: 'Docker',
    },
    {
      key: '2',
      file: '.../entinc/ent-repos2/svc1-container',
      repository: 'ent-repos2',
      status: 'Failed',
      filetype: 'Docker',
    },
    {
      key: '3',
      file: '.../entinc/ent-repos3/svc1-container',
      repository: 'ent-repos3',
      status: 'Failed',
      filetype: 'Docker',
    },
    {
      key: '4',
      file: '.../entinc/ent-repos4/svc2-container',
      repository: 'ent-repos4',
      status: 'Failed',
      filetype: 'Kubernetes',
    },
    {
      key: '5',
      file: '.../entinc/ent-repos5/svc2-container',
      repository: 'ent-repos5',
      status: 'Failed',
      filetype: 'Kubernetes',
    },
    {
      key: '6',
      file: '.../entinc/ent-repos6/svc2-container',
      repository: 'ent-repos6',
      status: 'Failed',
      filetype: 'Kubernetes',
    },
    {
      key: '7',
      file: '.../entinc/ent-repos7/svc2-container',
      repository: 'ent-repos7',
      status: 'Failed',
      filetype: 'Kubernetes',
    },
  ];
};
