import {
  Body,
  ConflictException,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { IUserService } from '~/api/users/interfaces/user.serive.interface';
import { IAuthService } from '~/api/auth/interfaces/auth.service.interface';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AuthService) private authService: IAuthService,
    @Inject(UserService) private userService: IUserService
  ) {}

  @Post('signin')
  async signIn(@Body() body: SigninUserDto): Promise<{ token: string }> {
    const user = await this.authService.signIn(body);
    if (!user) {
      throw new NotFoundException('No user found');
    }
    const token = await this.authService.createToken(user);
    return { token };
  }

  @Post('signup')
  async signUp(
    @Body() createUserDto: CreateUserDto
  ): Promise<{ success: boolean }> {
    const emailConflict = await this.userService.findByEmail(
      createUserDto.email
    );
    if (emailConflict) {
      throw new ConflictException('email');
    }
    const user = await this.authService.signUp(createUserDto);
    return { success: !!user };
  }

  @Get('email-free/:email')
  async emailFree(@Param() params: any): Promise<{ available: boolean }> {
    const user = await this.userService.findByEmail(params.email);
    return { available: !!user };
  }
}
