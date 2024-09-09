import { Typography } from "antd";
import { TClassName } from "../../theme/types";
import TMayBe from "../connector/TMayBe";
import capitalize from "./capitalize";

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
      {capitalize(severity ?? "")}
    </Typography.Text>
  );
};

export default Severity;
