import { TAggCompReport } from "./../service/useGetClusterComplianceAggMatrix";

export function extractRepoName(url: string): string | null {
  const parts = url.split("/");
  let lastPart;
  if (url.includes("bitbucket.org")) {
    const srcIndex = parts.indexOf("src");
    lastPart = srcIndex > 0 ? parts[srcIndex - 1] : parts[parts.length - 1];
  } else {
    if (parts.length === 6) {
      lastPart = parts[parts.length - 2];
    } else {
      lastPart = parts[parts.length - 1];
    }
  }
  const repoName = lastPart?.endsWith(".git")
    ? lastPart.slice(0, -4)
    : lastPart;
  return repoName || "";
}

export const getUniquekyes = (keyList: string[]): string[] => {
  const uniqueList = new Set<string>(keyList);
  return Array.from(uniqueList) ?? [];
};

export const formatPercentage = (value: number) => {
  const roundedValue = Math.round(value * 10) / 10;

  let valueStr = roundedValue.toString();

  if (valueStr.endsWith(".0")) {
    valueStr = valueStr.slice(0, -2);
  }

  return Number(valueStr);
};
export const calculatePercentage = (count: number, total: number) => {
  if (total === 0) {
    return 0;
  }
  return formatPercentage((count / total) * 100);
};

export const extractProviderName = (key: string): string => {
  return key.replace(/FailCount|TotalCount/g, "").toLowerCase();
};

export const convertToKFormat = (number: number): string => {
  if (number < 1000) {
    return number.toString();
  }

  const formattedNumber = (number / 1000).toFixed(1);
  return `${formattedNumber}K`;
};

export const getComplianceWithScore = (input: TAggCompReport[]) => {
  const output = input.map((item) => ({
    ...item,
    score: formatPercentage((item?.pass / item?.total ?? 1) * 100),
  }));
  return output;
};
