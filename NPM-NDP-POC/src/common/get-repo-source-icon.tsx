import { GithubOutlined } from "@ant-design/icons";
import DataTestId from "../components/data-test-id";
import { GitlabIcon } from "../assets/icons/GitlabIcon";
import { Bitbucket } from "../assets/icons/Bitbucket";

export const getSourceIcon = (source: string, iconProps?: Record<any, any>) => {
  let sourceName = "github";

  if (source.includes("gitlab")) sourceName = "gitlab";
  else if (source.includes("bitbucket")) sourceName = "bitbucket";

  const iconConfig: Record<string, (props: any) => React.ReactElement> = {
    github: (props: any) => (
      <GithubOutlined style={{ width: "21px" }} {...props} />
    ),
    gitlab: (props: any) => <GitlabIcon style={{ width: "21px" }} {...props} />,
    bitbucket: (props: any) => (
      <Bitbucket style={{ width: "21px" }} {...props} />
    ),
  };

  return (
    <DataTestId value={`${sourceName}-repo`}>
      {(dataTestId) => {
        return iconConfig[sourceName]({ ...dataTestId, ...iconProps });
      }}
    </DataTestId>
  );
};
