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
const cors_1 = __importDefault(require("cors"));
const Customers_1 = require("./resolvers/Customers");
const Users_1 = require("./resolvers/Users");
const Hello_1 = require("./resolvers/Hello");
// Construct a schema using graphql schema language
const main = async () => {
    const schema = await type_graphql_1.buildSchema({
        resolvers: [Hello_1.HelloResolver, Customers_1.CustomersResolver, Users_1.UsersResolver],
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
    app.use(cors_1.default({
        origin: 'http://localhost:8080',
        credentials: true,
    }));
    app.use('/graphql', express_graphql_1.graphqlHTTP({
        schema,
    }));
    app.listen(4999, () => {
        console.log(`Running a GraphQL API server at http://localhost:4999/graphql`);
    });
};
main().catch((err) => {
    console.log(err);
});
