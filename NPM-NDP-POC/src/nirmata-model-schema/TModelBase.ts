import TCreated from './TCreated';
import TMayBe from './TMayBe';
import TModelIndex from './TModelIndex';
import TModified from './TModified';
import TAPIService from './TAPIService';

type TModelBase = TCreated &
  TModified & {
    ancestors?: TMayBe<TMayBe<TModelBase>[]>;
    id?: TMayBe<string>;
    modelIndex?: TMayBe<TModelIndex>;
    service?: TMayBe<TAPIService>;
    uri?: TMayBe<string>;
  };

export default TModelBase;
