import { InputType, Field } from 'type-graphql';
import { Length } from 'class-validator';
import { Users } from '../../entities/Users';

@InputType()
export class UsersInput implements Partial<Users> {
    @Field()
    @Length(1, 255)
	username!: String;

	@Field()
	@Length(1, 255)
	firstname!: String;

	@Field()
	lastname!: String;

    @Field()
    @Length(1, 255)
	email!: String;

	@Field()
	@Length(1, 255)
	position!: String;

    @Field()
    @Length(1, 255)
    role!: String;
    
    @Field()
	@Length(1, 255)
	password!: String;
}
