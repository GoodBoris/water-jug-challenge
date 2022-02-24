export const EGCD = (a: number, b: number): number => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  if (a === 0) {
    return b;
  }
  let positiveA = Math.abs(a);
  let positiveB = Math.abs(b);

  while (positiveB !== 0) {
    if (positiveA > positiveB) {
      positiveA = positiveA - positiveB;
    } else {
      positiveB = positiveB - positiveA;
    }
  }
  return positiveA;
};
