import { Injectable } from '@nestjs/common';
import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';
import { pourWater } from '~/api/water-jug-solution/algorithm';
import {
  CalculateSolutionsStrategyAbstract,
} from '~/api/water-jug-solution/calculation-strategy/calculate-solutions-strategy.abstract';

@Injectable()
export class SynchronousCalculateSolutionsStrategy extends CalculateSolutionsStrategyAbstract {
  constructor() {
    super();
  }

  public async calculateSolutions(firstJugCapacity: number, secondJugCapacity: number, targetCapacity: number): Promise<[ISolutionStep[], ISolutionStep[]]> {
    const fromFirstToSecondJugSolution = pourWater({
      fromJugCapacity: firstJugCapacity,
      toJugCapacity: secondJugCapacity,
      requiredAmount: targetCapacity,
    });
    const fromSecondToFirstJugSolution = pourWater({
      fromJugCapacity: secondJugCapacity,
      toJugCapacity: firstJugCapacity,
      requiredAmount: targetCapacity,
    });
    return CalculateSolutionsStrategyAbstract.swapJugsAlias([fromFirstToSecondJugSolution, fromSecondToFirstJugSolution]);
  }
}