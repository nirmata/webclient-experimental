import TMayBe from './TMayBe';

type TModified = {
  modifiedBy?: TMayBe<string>;
  modifiedOn?: TMayBe<number>;
};

export default TModified;
