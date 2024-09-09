import { RepRealDataTableRow } from '../../components/componentsV2/types';
import { TRepoEntry, TRepositoriesResponse } from '../../components/repository-table';
import TMayBe from '../connector/TMayBe';

export function convertJsonToRows(jsonData: TMayBe<TRepositoriesResponse>): RepRealDataTableRow[] {
  return jsonData?.entries?.map((entry: TRepoEntry, index: number) => {
    const key = (index + 1).toString();
    const repository = entry._id['source-id'];
    const filetypes = Object.keys(entry['resource-type']);
    const files = Object.keys( entry?.['resource-id']).length??0;
    const grade = entry.grade || '';
    const result = entry.result || {};
    const failed = result.fail || 0;
    const passed = result.pass || 0;
    const warning = result.warning || 0;
    const error = result.error || 0;
    const skipped = result.skipped || 0;
    const totalFindings = Object.values(entry['resource-id'])
    .map(Number)
    .reduce((acc: number, val: number) => acc + val, 0);

    return {
      key,
      repository,
      filetypes,
      files,
      grade,
      failed,
      warning,
      passed,
      error,
      skipped,
      totalFindings,
    };
  })??[];
}
