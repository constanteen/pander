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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = exports.Users = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
let Users = class Users {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ unique: true }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Users.prototype, "firstname", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Users.prototype, "lastname", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Users.prototype, "position", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    typegoose_1.prop({ default: new Date(), required: true, nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop({ default: new Date(), required: true }),
    __metadata("design:type", Date)
], Users.prototype, "lastLogin", void 0);
Users = __decorate([
    type_graphql_1.ArgsType(),
    type_graphql_1.ObjectType({ description: "The Users model" })
], Users);
exports.Users = Users;
exports.UsersModel = typegoose_1.getModelForClass(Users);
