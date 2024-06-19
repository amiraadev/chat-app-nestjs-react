import { Resolver,Query } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
    @Query(()=>String) 
    async hello() {
        return 'hello'
    }
}
