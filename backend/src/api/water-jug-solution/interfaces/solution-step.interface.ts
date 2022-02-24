import { StepAction } from '~/api/water-jug-solution/enums/step-action';

export interface ISolutionStep {
  x: number;
  y: number;
  action: StepAction;
}