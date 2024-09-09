import TMayBe from '../../../nirmata-model-schema/TMayBe';
import { emptyFallbackValue } from '../../constants';
import { TClassName } from '../../theme/types';
import capitalize from '../../utils/capitalize';
import Typography from '../typography';

const severityClassNames: Record<string, TClassName> = {
  'critical': 'n-danger-8',
  'high': 'n-danger',
  'medium': 'n-warning',
  'low': 'n-info',
};

export const Severity: React.FC<{ severity?: TMayBe<string> }> = ({ severity }) => {
  const lowerCaseValue = severity?.toLowerCase();

  return (
    <Typography.Text className={lowerCaseValue ? severityClassNames[lowerCaseValue] : undefined}>
      {capitalize(severity ?? emptyFallbackValue)}
    </Typography.Text>
  );
};

export default Severity;
