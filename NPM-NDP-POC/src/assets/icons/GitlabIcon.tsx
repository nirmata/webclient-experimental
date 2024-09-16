import { ImgHTMLAttributes } from "react";
import Gitlab from "../../assets/svgs/gitlab.svg";

export function GitlabIcon({ ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={Gitlab} width={21} height={21} {...props} />;
}
