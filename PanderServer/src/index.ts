import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { graphqlHTTP } from 'express-graphql';
import { connect } from 'mongoose';
import cors from 'cors';
import { CustomersResolver } from './resolvers/Customers';
import { UsersResolver } from './resolvers/Users';
import { HelloResolver } from './resolvers/Hello';

// Construct a schema using graphql schema language
const main = async () => {
	const schema = await buildSchema({
		resolvers: [HelloResolver, CustomersResolver, UsersResolver],
		emitSchemaFile: true,
		validate: false,
		dateScalarMode: 'timestamp',
	});

	// Create a mongoose connection
	const mongoose = await connect('mongodb://localhost:27017/', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: 'customers',
		useCreateIndex: true,
	});
	await mongoose.connection;

	var app = express();

	app.use(cors({
		origin: 'http://localhost:8080',
		credentials: true,
	}));

	app.use(
		'/graphql',
		graphqlHTTP({
			schema,
		})
	);
	
	app.listen(4999, () => {
		console.log(`Running a GraphQL API server at http://localhost:4999/graphql`);
	});
};

main().catch((err) => {
	console.log(err);
});
