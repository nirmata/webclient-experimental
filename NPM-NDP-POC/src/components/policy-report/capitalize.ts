import TMayBe from '../../nirmata-model-schema/TMayBe';

const capitalize = (value?: TMayBe<string>) => {
  try {
    return value
      ? [
        value.slice(0, 1).toUpperCase(),
        value.slice(1),
      ].join('')
      : value;
  } catch (error: unknown) {
    console.error('capitalize()', error);
    return value;
  }
};

export default capitalize;
