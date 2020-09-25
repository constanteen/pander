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
		@Arg('data') Customers: CustomersInput
	): Promise<Customers | Error> {
		// Error is here because I am still trying to figure out error classes in graphql
		const customers = await CustomersModel.find({ email: Customers.email });
		checkEmailInDB(customers);
		const customer = (await CustomersModel.create(Customers)).save();
		return customer;
	}

	@Mutation(() => Boolean)
	async deleteCustomer(@Arg('id') id: string): Promise<Boolean> {
		// Error is here because I am still trying to figure out error classes in graphql
		const deleted = await CustomersModel.findOneAndDelete({ _id: id });
		if (deleted) {
			return true;
		}
		return false;
	}
}
