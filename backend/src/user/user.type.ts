import {Field , ObjectType} from "@nestjs/graphql"

@ObjectType()
export class User {

    @Field()
    id?:number;

    @Field()
    fullName:string;

    @Field()
    email?:string;

    @Field({nullable: true})
    avatarUrl?:string;  

    @Field({nullable: true})
    password?:string;
    
    @Field({nullable: true})
    createdAt?:Date;
    
    @Field()
    updatedAt?:Date;

}