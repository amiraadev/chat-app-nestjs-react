import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigModule, AppModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: async (
        configService: ConfigService
      ) => {
        return {
          playground:true,
          autoSchemaFile:join(process.cwd(),'src/schema.gql'),
          sortSchemas:true,
        }
      },
    }),
    ConfigModule.forRoot({
      isGlobal:true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
