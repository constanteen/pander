import { ObjectType, Field } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The Users model" })
export class Users {
    @Field(() => String)
    id!: string;

    @Field() 
    @Property({ unique: true })
    username!: String;

    @Field() 
    @Property()
    firstname!: String;

    @Field() 
    @Property()
    lastname!: String;

    @Field()
    @Property()
    email!: String;

    @Field() 
    @Property()
    position!: String;

    @Field()
    @Property()
    role!: String;

    @Property()
    password!: String;
}

export const UsersModel = getModelForClass(Users);