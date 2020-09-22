"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const express_graphql_1 = require("express-graphql");
const mongoose_1 = require("mongoose");
const Customers_1 = require("./resolvers/Customers");
const User_1 = require("./resolvers/User");
// Construct a schema using graphql schema language
const main = async () => {
    const schema = await type_graphql_1.buildSchema({
        resolvers: [Customers_1.CustomersResolver, User_1.UsersResolver],
        emitSchemaFile: true,
        validate: false,
        dateScalarMode: 'timestamp',
    });
    // Create a mongoose connection
    const mongoose = await mongoose_1.connect('mongodb://localhost:27017/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'customers',
        useCreateIndex: true,
    });
    await mongoose.connection;
    var app = express_1.default();
    app.use('/graphql', express_graphql_1.graphqlHTTP({
        schema,
    }));
    app.listen(4000, () => {
        console.log(`Running a GraphQL API server at http://localhost:4000/graphql`);
    });
};
main().catch((err) => {
    console.log(err);
});
