import { ObjectType, Field, ArgsType } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
@ArgsType()
@ObjectType({ description: "The Users model" })
export class Users {
    @Field()
    id!: string;

    @Field() 
    @Property({ unique: true })
    username!: string;

    @Field() 
    @Property()
    firstname!: string;

    @Field() 
    @Property()
    lastname!: string;

    @Field()
    @Property()
    email!: string;

    @Field() 
    @Property()
    position!: string;

    @Field()
    @Property()
    role!: string;

    @Property()
    password!: string;

    @Property({ default: new Date(), required: true, nullable: true })
    createdAt!: Date;
    
    @Property({ default: new Date(), required: true })
    lastLogin!: Date;
}

export const UsersModel = getModelForClass(Users);