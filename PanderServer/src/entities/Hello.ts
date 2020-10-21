import { Field } from 'type-graphql';

export class Hello {
	@Field(() => String)
    Hello!: string;
}