import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';
import { ConfigModule } from './shared/config/config.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { ConfigService } from './shared/config/config.service';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { IConfigService } from '~/shared/config/config.service.interface';
import { WaterJugSolutionModule } from '~/api/water-jug-solution/water-jug-solution.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: IConfigService) => {
        Logger.log(`Current Config: ${configService.environment}`);
        return <PostgresConnectionOptions>{
          type: 'postgres',
          host: configService.environment.database.host,
          port: configService.environment.database.port,
          username: configService.environment.database.username,
          password: configService.environment.database.password,
          database: configService.environment.database.database,
          logging: configService.environment.database.logging,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: configService.environment.database.synchronize,
          charset: 'utf8mb4',
        };
      },
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    ConfigModule,
    WaterJugSolutionModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
