import { ObjectType, Field, ArgsType } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ArgsType()
@ObjectType({ description: 'The Customers model' })
export class Customers {
	@Field(() => String)
	id!: string;

	@Field()
	@Property({ required: true })
	firstname!: string;

	@Field()
	@Property()
	lastname!: string;

	@Field()
	@Property({ unique: true, index: true })
	email!: string;

	@Field()
	@Property({ required: true })
	DOB?: string;

	@Field()
	@Property({ required: true })
	phone!: string;

	@Field()
	@Property({ required: true })
	vehicleName!: string;

	@Field()
	@Property({ required: true })
	vehicleModel!: string;

	@Field()
	@Property({ required: true })
	modelYear!: Number;

	@Field()
	@Property({ required: true })
	chassisNumber!: string;

	@Field()
	@Property({ required: true })
	engineNumber!: string;

	@Field()
	@Property({ required: true })
	fuelType!: string; // Diesel, Fuel or electric

	@Field()
	@Property({ required: true })
	transmission!: string; // Manual or Automatic transmission

	@Field()
	@Property({ required: true })
	cylinders!: string;

	@Field()
	@Property({ required: true })
	exteriorColor!: string;

	@Field({ nullable: true })
	@Property()
	lastVisit!: Date;

	@Property({ default: new Date(), required: true, nullable: true })
	createdAt!: Date;
}

export const CustomersModel = getModelForClass(Customers);
