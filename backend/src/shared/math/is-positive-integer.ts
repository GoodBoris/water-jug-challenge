export const isPositiveInteger = (value: number | string): boolean => {
  const num = Number(value);
  return Number.isInteger(num) && num > 0;
};
