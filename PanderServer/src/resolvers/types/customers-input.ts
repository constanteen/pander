import { InputType, Field } from 'type-graphql';
import { IsDate, IsEmail, Length } from 'class-validator';
import { Customers } from '../../entities/Customers';

@InputType()
export class CustomersInput implements Partial<Customers> {
    @Field()
    @Length(1, 255)
	firstname!: string;

	@Field()
	@Length(1, 255)
	lastname!: string;

	@Field()
	@IsEmail()
	email!: string;

    @Field()
    @Length(1, 255)
	DOB!: string;

	@Field()
	@Length(1, 255)
	phone!: string;

    @Field()
    @Length(1, 255)
    vehicleModel!: string;
    
    @Field()
	@Length(1, 255)
	vehicleName!: string;

	@Field()
	modelYear!: Number;

    @Field()
    @Length(1, 255)
	chassisNumber!: string;

	@Field()
	@Length(1, 255)
	engineNumber!: string;

	@IsDate()
	createdAt!: Date;
}
