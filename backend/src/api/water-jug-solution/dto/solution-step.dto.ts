import { StepAction } from '~/api/water-jug-solution/enums/step-action';
import { ISolutionStep } from '~/api/water-jug-solution/interfaces/solution-step.interface';
import { IsEnum, IsInt, Min } from 'class-validator';

export class SolutionStepDto implements ISolutionStep {
  @IsEnum(StepAction)
  action: StepAction;
  @IsInt()
  @Min(0)
  x: number;
  @IsInt()
  @Min(0)
  y: number;
}