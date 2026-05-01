import { InputType, Field } from "@nestjs/graphql";
import { IsString, IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class CreatePartyDTO {

    @Field()
    @IsNotEmpty()
    @IsString()
    fullname!:string

    @Field()
    @IsNotEmpty()
    @IsString()
    shortname!:string

    @Field()
    @IsNotEmpty()
    @IsString()
    symbol!:string
  
}