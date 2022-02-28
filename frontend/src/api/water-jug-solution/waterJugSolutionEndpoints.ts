import axios, { AxiosResponse } from 'axios';
import { FindSolutionDto } from './findSolutionDto';
import { IWaterJugChallengeSolution } from '../../models';

export const findSolution = async (model: FindSolutionDto): Promise<AxiosResponse<IWaterJugChallengeSolution>> => {
  try {
    return await axios({
      method: 'PUT',
      url: 'api/water-jug-solution/find',
      data: model,
    });
  } catch (err: any) {
    const response: AxiosResponse = err?.response;
    throw new Error(response.data?.message);
  }
};