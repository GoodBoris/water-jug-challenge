import { IsInt, IsPositive } from 'class-validator';

export class WaterJugChallengeRequestDto {
  @IsInt()
  @IsPositive()
  firstJugCapacity: number;
  @IsInt()
  @IsPositive()
  secondJugCapacity: number;
  @IsInt()
  @IsPositive()
  targetCapacity: number;
}