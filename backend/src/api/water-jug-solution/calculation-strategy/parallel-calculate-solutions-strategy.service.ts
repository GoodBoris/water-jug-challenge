import { Injectable } from '@nestjs/common';
import { WorkerPool } from '~/api/water-jug-solution/worker-pool';
import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';
import { CalculateSolutionsStrategyAbstract } from '~/api/water-jug-solution/calculation-strategy/calculate-solutions-strategy.abstract';

@Injectable()
export class ParallelCalculateSolutionsStrategy extends CalculateSolutionsStrategyAbstract {
  constructor(private readonly pool: WorkerPool) {
    super();
  }

  public async calculateSolutions(
    firstJugCapacity: number,
    secondJugCapacity: number,
    targetCapacity: number
  ): Promise<[ISolutionStep[], ISolutionStep[]]> {
    const fromFirstToSecondJugSolution = this.pool.pourWater(
      firstJugCapacity,
      secondJugCapacity,
      targetCapacity
    );
    const fromSecondToFirstJugSolution = this.pool.pourWater(
      secondJugCapacity,
      firstJugCapacity,
      targetCapacity
    );
    return Promise.all([
      fromFirstToSecondJugSolution,
      fromSecondToFirstJugSolution,
    ]).then(result => CalculateSolutionsStrategyAbstract.swapJugsAlias(result));
  }
}
