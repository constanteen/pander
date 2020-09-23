import { ObjectType, Field } from "type-graphql";
import { prop as Property } from "@typegoose/typegoose";

@ObjectType({ description: "The User model" })
export class User {
    @Field() 
    @Property()
    username!: string;

    @Field() 
    @Property()
    password!: string;

    @Property({default: new Date()})
    lastLogin!: Date;
}