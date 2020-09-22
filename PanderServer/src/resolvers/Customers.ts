import { Customers, CustomersModel } from '../entities/Customers';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { CustomersInput } from './types/customers-input';

@Resolver(Customers)
export class CustomersResolver {
	@Query((returns) => [Customers])
	async findACustomer(@Arg('id') id: string) {
		return await CustomersModel.find({ _id: id });
	}

	@Query(() => [Customers])
	async returnAllCustomers() {
		return await CustomersModel.find();
	}

	@Mutation(() => Customers)
	async createCustomer(
		@Arg('data')
		{
			firstname,
			lastname,
			email,
			DOB,
			phone,
			vehicleName,
			vehicleModel,
			modelYear,
			chassisNumber,
			engineNumber,
			createdAt,
		}: CustomersInput
	): Promise<Customers> {
		const customer = (
			await CustomersModel.create({
				firstname,
				lastname,
				email,
				DOB,
				phone,
				vehicleName,
				vehicleModel,
				modelYear,
				chassisNumber,
				engineNumber,
				createdAt,
			})
		).save();
		return customer;
	}
}
