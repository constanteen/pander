import { Users, UsersModel } from '../entities/Users';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { UsersInput } from './types/users-input';

@Resolver(Users)
export class UsersResolver {
	@Query((returns) => [Users])
	async findAUser(@Arg('id') id: string) {
		return await UsersModel.find({ _id: id });
	}

	@Query(() => [Users])
	async listAllUsers() {
		return await UsersModel.find();
	}

	@Mutation(() => Users)
	async createUser(
		@Arg('data')
		{ username, firstname, lastname, email, position, role, password }: UsersInput
	): Promise<Users> {
		const user = (
			await UsersModel.create({
				username,
				firstname,
				lastname,
				email,
				position,
				role,
				password,
			})
		).save();
		return user;
	}
}
