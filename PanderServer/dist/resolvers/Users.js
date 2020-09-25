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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const Users_1 = require("../entities/Users");
const type_graphql_1 = require("type-graphql");
const users_input_1 = require("./types/users-input");
const user_input_1 = require("./types/user-input");
const argon2_1 = __importDefault(require("argon2"));
const uniqueEmail_1 = require("../utils/uniqueEmail");
// import { User } from '../entities/User';
let UsersResolver = class UsersResolver {
    async findAUser(id) {
        return await Users_1.UsersModel.find({ _id: id });
    }
    async listAllUsers() {
        return await Users_1.UsersModel.find();
    }
    async loginUser({ username, password, lastLogin }) {
        // Undefined is here because I am still trying to figure out error classes in graphql
        const user = await Users_1.UsersModel.find({ username: username });
        if (!user) {
            // Throw new error
            console.log('Invalid Username');
            return;
        }
        const validPassword = await argon2_1.default.verify(user[0].password, password);
        if (!validPassword) {
            // Throw new error
            console.log('wrong password');
            return;
        }
        await Users_1.UsersModel.updateOne({ _id: user[0].id }, { $set: { lastLogin: new Date() } });
        console.log('User: ', user);
        return user[0];
    }
    async createUser(Users) {
        const newuser = await Users_1.UsersModel.find({ email: Users.email });
        // Check if username exists.
        // convert username to small letter before saving
        const smallUserName = Users.username.toLowerCase();
        const usernameExists = await Users_1.UsersModel.find({ username: smallUserName });
        if (usernameExists) {
            throw new Error('Username already exists');
        }
        uniqueEmail_1.checkEmailInDB(newuser);
        const hashedPassword = await argon2_1.default.hash(Users.password);
        const user = (await Users_1.UsersModel.create({
            ...Users,
            password: hashedPassword,
            username: smallUserName,
        })).save();
        return user;
    }
    async deleteUser(id) {
        const doc = await Users_1.UsersModel.findOneAndDelete({ _id: id });
        if (doc) {
            return true;
        }
        return false;
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
    type_graphql_1.Query(() => [Users_1.Users]),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "loginUser", null);
__decorate([
    type_graphql_1.Mutation(() => [Users_1.Users]),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_input_1.UsersInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUser", null);
UsersResolver = __decorate([
    type_graphql_1.Resolver(Users_1.Users)
], UsersResolver);
exports.UsersResolver = UsersResolver;
