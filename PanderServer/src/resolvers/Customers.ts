import { Customers, CustomersModel } from '../entities/Customers';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { CustomersInput } from './types/customers-input';
import { checkEmailInDB } from '../utils/uniqueEmail';

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
		@Arg('data')Customers: CustomersInput
	): Promise<Customers | Error> {
		const customers = await CustomersModel.find({ email: Customers.email });
		checkEmailInDB(customers);
		const customer = (
			await CustomersModel.create(Customers)
		).save();
		return customer;
	}
}
