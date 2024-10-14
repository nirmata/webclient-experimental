/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'branch' | 'repoType' | 'repoUrl';

type TPolicySetGitConfig = {
  branch?: TMayBe<string>;
  repoType?: TMayBe<string>;
  repoUrl?: TMayBe<string>;
  service?: 'policies';
};

export default TPolicySetGitConfig;
