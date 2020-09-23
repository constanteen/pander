import { InputType, Field } from 'type-graphql';
import { IsDate, Length } from 'class-validator';
import { Users } from '../../entities/Users';

@InputType()
export class UsersInput implements Partial<Users> {
    @Field()
    @Length(1, 255)
	username!: string;

	@Field()
	@Length(1, 255)
	firstname!: string;

	@Field()
	lastname!: string;

    @Field()
    @Length(1, 255)
	email!: string;

	@Field()
	@Length(1, 255)
	position!: string;

    @Field()
    @Length(1, 255)
    role!: string;
    
    @Field()
	@Length(1, 255)
	password!: string;

	@IsDate()
	createdAt!: Date;

	@IsDate()
	lastLogin!: Date;
}
