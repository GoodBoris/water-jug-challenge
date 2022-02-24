import { Module } from '@nestjs/common';
import { WaterJugSolutionController } from '~/api/water-jug-solution/water-jug-solution.controller';
import { WaterJugSolutionService } from '~/api/water-jug-solution/water-jug-solution.service';
import { WorkerPool } from '~/api/water-jug-solution/worker-pool';
import { cpus } from 'os';
import {
  ParallelCalculateSolutionsStrategy,
} from '~/api/water-jug-solution/calculation-strategy/parallel-calculate-solutions-strategy.service';
import {
  SynchronousCalculateSolutionsStrategy,
} from '~/api/water-jug-solution/calculation-strategy/sync-calculate-solutions-strategy.service';

@Module({
  imports: [],
  controllers: [WaterJugSolutionController],
  providers: [
    WaterJugSolutionService,
    WorkerPool,
    // Resolve mathematical task based on environment CPUs number. If the system has more than one core, the solutions will be found via multithreading.
    // Actually, the algorithm complexity is linear = O(x+y) where x and y are the jugs capacity.
    // In the real world there is no need to use workers for that 'simple' algo tasks. 
    // The simplified strategy pattern was implemented here to show the example how to work with thread and inject the proper instance.
    {
      provide: 'CALCULATION_STRATEGY',
      useClass: cpus().length > 1 ? ParallelCalculateSolutionsStrategy : SynchronousCalculateSolutionsStrategy,
    },
  ],
  exports: [],
})
export class WaterJugSolutionModule {
}
