import { WaterJugChallengeRequestDto } from '~/api/water-jug-solution/dto/water-jug-challenge-request.dto';
import { IWaterJugChallengeSolution } from '~/api/water-jug-solution/interfaces/water-jug-challenge-solution.interface';


export interface IWaterJugSolutionService {
  calculateSteps(waterJugChallengeRequestDto: WaterJugChallengeRequestDto): Promise<IWaterJugChallengeSolution>;
}