// WARN
// For the enterprise development, the shared and common models between the server and the client should be shared using lib/domain package
// To simplify the demo, the repeated contracts were copied-pasted

export type CurrentUser = {
  id: number;
  pseudo: string;
  email: string;
  token?: string;
};

export interface IAuth {
  currentUser: CurrentUser | null;
  err: any;
  isLoading: boolean;
}

export interface ISnackBarState {
  snackbarAlert: ISnackBarAlert;
}

export interface ISnackBarAlert {
  type: AlertType;
  msg: string;
};

export type AlertType = 'success' | 'info' | 'warning' | 'error' | undefined;

export interface IUser {
  id: number;
  pseudo: string;
  email: string;
  role: "user" | "premium" | "admin";
}


export interface IWaterJugChallengeSolution {
  resolution: SolutionResult;
  direction: PourDirection;
  steps: ISolutionStep[];
}

export enum SolutionResult {
  Solved,
  NoSolution,
}

export enum PourDirection {
  FirstToSecond,
  SecondToFirst,
  NoDirection,
}

export interface ISolutionStep {
  x: number;
  y: number;
  action: StepAction;
}

export enum StepAction {
  Fill,
  Empty,
  Transfer,
}
