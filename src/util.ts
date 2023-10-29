export function getParam(param: string | string[]): number | null {
  if (typeof param !== 'string') return null;
  const result = parseInt(param);
  if (isNaN(result)) null;

  return result;
}
