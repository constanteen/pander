import { Resolver, Query } from 'type-graphql';
import { Hello } from '../entities/Hello';

@Resolver(Hello)
export class HelloResolver {
	@Query((returns) => String)
	hello() {
        return 'Hello World';
    }
}
