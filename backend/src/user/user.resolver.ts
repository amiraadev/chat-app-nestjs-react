import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.type';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'path';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

@Resolver()
export class UserResolver {

    constructor(private readonly userService :UserService){}

    UseGuards(GraphqlAuthGuard)
    @Mutation(()=>User)
    async updateProfile(
        @Args('fullname') fullname: string,
        @Args('file',{type:() => GraphQLUpload, nullable: true})
        file:GraphQLUpload.FileUpload,
        @Context() context:{req:Request}
    ){}
}
