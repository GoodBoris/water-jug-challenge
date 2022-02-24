import { IWaterJugChallengeSolution } from '~/api/water-jug-solution/interfaces/water-jug-challenge-solution.interface';
import { SolutionResult } from '~/api/water-jug-solution/enums/solution-result';
import { IsArray, IsEnum } from 'class-validator';
import { SolutionStepDto } from '~/api/water-jug-solution/dto/solution-step.dto';
import { PourDirection } from '~/api/water-jug-solution/enums/pour-direction';

export class WaterJugChallengeSolutionDto
  implements IWaterJugChallengeSolution
{
  @IsEnum(SolutionResult)
  resolution: SolutionResult;
  @IsArray()
  steps: SolutionStepDto[];
  @IsEnum(PourDirection)
  direction: PourDirection;
}
