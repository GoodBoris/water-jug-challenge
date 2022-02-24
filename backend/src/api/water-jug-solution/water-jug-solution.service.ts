import { IWaterJugSolutionService } from '~/api/water-jug-solution/interfaces/water-jug-solution.service.interface';
import { Inject, Injectable } from '@nestjs/common';
import { WaterJugChallengeRequestDto } from '~/api/water-jug-solution/dto/water-jug-challenge-request.dto';
import { IWaterJugChallengeSolution } from '~/api/water-jug-solution/interfaces/water-jug-challenge-solution.interface';
import { SolutionResult } from '~/api/water-jug-solution/enums/solution-result';
import { EGCD } from '~/shared/math/greates-common-divisor';
import { PourDirection } from '~/api/water-jug-solution/enums/pour-direction';
import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';
import {
  ICalculateSolutionsStrategy,
} from '~/api/water-jug-solution/calculation-strategy/calculate-solutions-strategy.interface';

@Injectable()
export class WaterJugSolutionService implements IWaterJugSolutionService {
  constructor(@Inject('CALCULATION_STRATEGY') private readonly calculateSolutionsStrategy: ICalculateSolutionsStrategy) {
  }

  async calculateSteps({
                         firstJugCapacity,
                         secondJugCapacity,
                         targetCapacity,
                       }: WaterJugChallengeRequestDto): Promise<IWaterJugChallengeSolution> {
    if (
      (firstJugCapacity + secondJugCapacity < targetCapacity) ||
      (targetCapacity % EGCD(firstJugCapacity, secondJugCapacity) !== 0)
    ) {
      return { resolution: SolutionResult.NoSolution, direction: PourDirection.NoDirection, steps: [] };
    }
    const [solution1, solution2] =
      await this.calculateSolutionsStrategy.calculateSolutions(firstJugCapacity, secondJugCapacity, targetCapacity);
    const bestResult = WaterJugSolutionService.getBestResult(solution1, solution2);

    return {
      steps: bestResult.solution,
      direction: bestResult.direction,
      resolution: SolutionResult.Solved,
    };
  }

  private static readonly getBestResult = (first: ISolutionStep[], second: ISolutionStep[]): { direction: PourDirection, solution: ISolutionStep[] } =>
    first.length <= second.length
      ? ({
        direction: PourDirection.FirstToSecond,
        solution: first,
      })
      : ({
        direction: PourDirection.SecondToFirst,
        solution: second,
      });

}