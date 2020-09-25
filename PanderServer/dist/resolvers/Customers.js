"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersResolver = void 0;
const Customers_1 = require("../entities/Customers");
const type_graphql_1 = require("type-graphql");
const customers_input_1 = require("./types/customers-input");
const uniqueEmail_1 = require("../utils/uniqueEmail");
let CustomersResolver = class CustomersResolver {
    async findACustomer(id) {
        return await Customers_1.CustomersModel.find({ _id: id });
    }
    async returnAllCustomers() {
        return await Customers_1.CustomersModel.find();
    }
    async createCustomer(Customers) {
        // Error is here because I am still trying to figure out error classes in graphql
        const customers = await Customers_1.CustomersModel.find({ email: Customers.email });
        uniqueEmail_1.checkEmailInDB(customers);
        const customer = (await Customers_1.CustomersModel.create(Customers)).save();
        return customer;
    }
    async deleteCustomer(id) {
        // Error is here because I am still trying to figure out error classes in graphql
        const deleted = await Customers_1.CustomersModel.findOneAndDelete({ _id: id });
        if (deleted) {
            return true;
        }
        return false;
    }
};
__decorate([
    type_graphql_1.Query((returns) => [Customers_1.Customers]),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "findACustomer", null);
__decorate([
    type_graphql_1.Query(() => [Customers_1.Customers]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "returnAllCustomers", null);
__decorate([
    type_graphql_1.Mutation(() => Customers_1.Customers),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customers_input_1.CustomersInput]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "createCustomer", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "deleteCustomer", null);
CustomersResolver = __decorate([
    type_graphql_1.Resolver(Customers_1.Customers)
], CustomersResolver);
exports.CustomersResolver = CustomersResolver;
