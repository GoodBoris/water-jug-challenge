import { SolutionResult } from '~/api/water-jug-solution/enums/solution-result';
import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';
import { PourDirection } from '~/api/water-jug-solution/enums/pour-direction';

export interface IWaterJugChallengeSolution {
  resolution: SolutionResult;
  direction: PourDirection;
  steps: ISolutionStep[];
}
