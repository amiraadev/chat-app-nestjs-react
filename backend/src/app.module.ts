import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { TokenService } from './token/token.service';
import { ChatroomService } from './chatroom/chatroom.service';
import { ChatroomResolver } from './chatroom/chatroom.resolver';
import { PrismaService } from './prisma.service';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LiveChatroomModule } from './live-chatroom/live-chatroom.module';

const pubsub = new RedisPubSub({
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    retryStrategy: (times) => {
      return Math.min(times * 50, 2000);
    },
  },
});
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:join(__dirname, '..','public'),
      serveRoot:"/",
    }),
    AuthModule,
    UserModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigModule, AppModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: async (
        configService: ConfigService,
        tokenService: TokenService,

      ) => {
        return {
          installSubscriptionHandlers:true,
          playground: true,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchemas: true,
          subscriptions: {
            'graphql-ws': true,
            'subscriptions-transport-ws': true,
          },
          onConnect:(connectionParams) => {
            const token = tokenService.extractToken(connectionParams);

            if (!token) {
              throw new Error('Token not provided');
            }
            const user = tokenService.validateToken(token);
            if (!user) {
              throw new Error('Invalid token');
            }
            return { user };
          },
          context:({req,res,connection})=>{
            if(connection){
              return {req,res,user:connection.context.user,pubsub}
            }
            return{ req,res}
          }
        };
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LiveChatroomModule,
  ],
  controllers: [AppController],
  providers: [AppService, TokenService, ChatroomService, ChatroomResolver,PrismaService,UserService,JwtService],
})
export class AppModule {}
