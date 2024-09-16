import { MinusOutlined } from "@ant-design/icons";
import { nirmataColors } from "../../../assets/icons/global";

type TGreyDashProps = {
  style?: React.CSSProperties;
};

const GreyDash: React.FC<TGreyDashProps> = ({ style }) => {
  return (
    <MinusOutlined
      style={{
        display: "block",
        margin: "auto",
        color: nirmataColors.colorDash,
        maxWidth: "1.25rem",
        ...style,
      }}
    />
  );
};

export default GreyDash;
