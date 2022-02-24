import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';

export interface ICalculateSolutionsStrategy {
  calculateSolutions(
    firstJugCapacity: number,
    secondJugCapacity: number,
    targetCapacity: number
  ): Promise<[ISolutionStep[], ISolutionStep[]]>;
}
