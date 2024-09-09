import TMayBe from './TMayBe';

type TCreated = {
  createdBy?: TMayBe<string>;
  createdOn?: TMayBe<number>;
};

export default TCreated;
