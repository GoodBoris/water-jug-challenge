import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as Config } from '@nestjs/config';

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [
    Config.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
  ],
})
export class ConfigModule {}
