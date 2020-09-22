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
exports.UsersResolver = void 0;
const Users_1 = require("../entities/Users");
const type_graphql_1 = require("type-graphql");
const users_input_1 = require("./types/users-input");
let UsersResolver = class UsersResolver {
    async findAUser(id) {
        return await Users_1.UsersModel.find({ _id: id });
    }
    async listAllUsers() {
        return await Users_1.UsersModel.find();
    }
    async createUser({ username, firstname, lastname, email, position, role, password }) {
        const user = (await Users_1.UsersModel.create({
            username,
            firstname,
            lastname,
            email,
            position,
            role,
            password,
        })).save();
        return user;
    }
};
__decorate([
    type_graphql_1.Query((returns) => [Users_1.Users]),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findAUser", null);
__decorate([
    type_graphql_1.Query(() => [Users_1.Users]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "listAllUsers", null);
__decorate([
    type_graphql_1.Mutation(() => Users_1.Users),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_input_1.UsersInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
UsersResolver = __decorate([
    type_graphql_1.Resolver(Users_1.Users)
], UsersResolver);
exports.UsersResolver = UsersResolver;
