import { InputType, Field } from 'type-graphql';
import { IsDate, Length } from 'class-validator';
import { User } from '../../entities/User';

@InputType()
export class UserInput implements Partial<User> {
    @Field()
    @Length(1, 255)
	username!: string;
    
    @Field()
	@Length(1, 255)
    password!: string;
    
    @IsDate()
    lastLogin!: Date;
}
