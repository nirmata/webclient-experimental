import useQuery from "../../../components/connector/use-query";
import TPolicy from "../../../nirmata-model-schema/Policies.TPolicy";

export const useGetPolicyData = () => {
  const [
    { loading: policyLoading, data: policyData },
    { onLoad: onLoadPolicy },
  ] = useQuery<TPolicy[]>();

  const loadPolicyData = () => {
    return onLoadPolicy("policies/api/Policy?fields=id");
  };

  return { policyLoading, policyData, loadPolicyData };
};
