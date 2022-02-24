import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';
import Piscina = require('piscina');
import { IWorkerPool } from '~/api/water-jug-solution/interfaces/worker-pool.interface';

@Injectable()
export class WorkerPool implements IWorkerPool {
  private pool: Piscina = new Piscina({
    filename: resolve(__dirname, 'algorithm/index.js'),
  });

  public async pourWater(
    fromJugCapacity: number,
    toJugCapacity: number,
    requiredAmount: number
  ): Promise<ISolutionStep[]> {
    return await this.pool.run(
      { fromJugCapacity, toJugCapacity, requiredAmount },
      { name: 'pourWater' }
    );
  }
}
