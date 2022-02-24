import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';
import { ICalculateSolutionsStrategy } from '~/api/water-jug-solution/calculation-strategy/calculate-solutions-strategy.interface';

export abstract class CalculateSolutionsStrategyAbstract
  implements ICalculateSolutionsStrategy
{
  public abstract calculateSolutions(
    firstJugCapacity: number,
    secondJugCapacity: number,
    targetCapacity: number
  ): Promise<[ISolutionStep[], ISolutionStep[]]>;

  protected static swapJugsAlias = ([firstSolution, secondSolution]: [
    ISolutionStep[],
    ISolutionStep[]
  ]): [ISolutionStep[], ISolutionStep[]] => [
    firstSolution,
    //Swap x and y according to the original jugs naming and capacity
    secondSolution.map((solution: ISolutionStep) => ({
      ...solution,
      x: solution.y,
      y: solution.x,
    })),
  ];
}
