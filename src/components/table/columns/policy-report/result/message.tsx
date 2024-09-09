import TMayBe from '../../../../connector/TMayBe';
import {Typography} from 'antd'
import { LinkProps } from 'antd/es/typography/Link';
import { TextProps } from 'antd/es/typography/Text';

const MessageLink: React.FC<LinkProps & { message?: TMayBe<string> }> = ({ message, style, ...props }) => {
  return (
      <Typography.Link ellipsis style={{ maxWidth: '50vw', ...style }} {...props}>
        {(message ?? "")}
      </Typography.Link>
  );
};

const MessageText: React.FC<TextProps & { message?: TMayBe<string> }> = ({ message, style, ...props }) => {
  return (
    <Typography.Text style={{ maxWidth: '50vw', ...style }} {...props}>
      {(message ?? "")}
    </Typography.Text>
  );
};

export const Message = { Link: MessageLink, Text: MessageText }