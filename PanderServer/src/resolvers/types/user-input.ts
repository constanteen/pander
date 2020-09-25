import { InputType, Field } from 'type-graphql';
import { IsDate, Length } from 'class-validator';
import { Users } from '../../entities/Users';

@InputType()
export class UserInput implements Partial<Users> {
    @Field()
    @Length(1, 255)
	username!: string;
    
    @Field()
	@Length(1, 255)
    password!: string;
    
    @IsDate()
    lastLogin!: Date;
}
