import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';
import { StepAction } from '~/api/water-jug-solution/enums/step-action';
import { isPositiveInteger } from '~/shared/math/is-positive-integer';

export default (
  {
    fromJugCapacity,
    toJugCapacity,
    requiredAmount,
  }: { fromJugCapacity: number, toJugCapacity: number, requiredAmount: number }): ISolutionStep[] => {
  if (!isPositiveInteger(fromJugCapacity) || !isPositiveInteger(toJugCapacity) || !isPositiveInteger(requiredAmount)) {
    return [];
  }
  let fromJug = fromJugCapacity;
  let toJug = 0;
  const solutionSteps: ISolutionStep[] = [
    { x: fromJugCapacity, y: 0, action: StepAction.Fill },
  ];
  while (fromJug !== requiredAmount && toJug !== requiredAmount) {
    const maxPouredAmount = Math.min(fromJug, toJugCapacity - toJug);

    toJug += maxPouredAmount;
    fromJug -= maxPouredAmount;
    solutionSteps.push({ x: fromJug, y: toJug, action: StepAction.Transfer });

    if (fromJug === requiredAmount || toJug === requiredAmount) {
      return solutionSteps;
    }

    if (fromJug === 0) {
      fromJug = fromJugCapacity;
      solutionSteps.push({ x: fromJug, y: toJug, action: StepAction.Fill });
    }

    if (toJug === toJugCapacity) {
      toJug = 0;
      solutionSteps.push({ x: fromJug, y: toJug, action: StepAction.Empty });
    }
  }
  return solutionSteps;
}