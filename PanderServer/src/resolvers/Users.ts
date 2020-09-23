import { Users, UsersModel } from '../entities/Users';
import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { UsersInput } from './types/users-input';
import { UserInput } from './types/user-input';
import argon2 from 'argon2';
import { checkEmailInDB } from '../utils/uniqueEmail';
import { User } from '../entities/User';

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

	@Query(() => [User])
	async loginUser(
		@Arg('data')
		{ username, password, lastLogin }: UserInput
	): Promise<Users | undefined> {
		const user = await UsersModel.find({ username: username });
		if (!user) {
			// Throw new error
			console.log('Invalid Username');
			return;
		}
		const validPassword = await argon2.verify(user[0].password, password);
		if (!validPassword) {
			// Throw new error
			console.log('wrong password');
			return;
		}
		await UsersModel.updateOne(
			{ _id: user[0].id },
			{ $set: { lastLogin: new Date() } }
		);
		console.log('User: ', user);
		return user[0];
	}

	@Mutation(() => [Users])
	async createUser(@Arg('data') Users: UsersInput): Promise<Users | Error> {
		const newuser = await UsersModel.find({ email: Users.email });
		checkEmailInDB(newuser);
		const hashedPassword = await argon2.hash(Users.password);
		const user = (
			await UsersModel.create({ ...Users, password: hashedPassword })
		).save();
		return user;
	}

	@Mutation(() => Boolean)
	async deleteUser(@Arg('id') id: string): Promise<Boolean> {
		const doc = await UsersModel.findOneAndDelete({ _id: id });
		if (doc) {
			return true;
		}
		return false;
	}
}
