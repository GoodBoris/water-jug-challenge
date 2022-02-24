import { Body, ClassSerializerInterceptor, Controller, Inject, Put, UseInterceptors } from '@nestjs/common';
import { WaterJugChallengeRequestDto } from '~/api/water-jug-solution/dto/water-jug-challenge-request.dto';
import { WaterJugSolutionService } from '~/api/water-jug-solution/water-jug-solution.service';
import { IWaterJugSolutionService } from '~/api/water-jug-solution/interfaces/water-jug-solution.service.interface';
import { WaterJugChallengeSolutionDto } from '~/api/water-jug-solution/dto/water-jug-challenge-solution.dto';

@Controller('water-jug-solution')
@UseInterceptors(ClassSerializerInterceptor)
export class WaterJugSolutionController {
  constructor(@Inject(WaterJugSolutionService) private waterJugSolutionService: IWaterJugSolutionService) {
    
  }
  @Put('find')
  @UseInterceptors(ClassSerializerInterceptor)
  async findSolution(
    @Body() body: WaterJugChallengeRequestDto
  ): Promise<WaterJugChallengeSolutionDto> {
    return await this.waterJugSolutionService.calculateSteps(body);
  }
}
