import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";


export type PartyDocument = HydratedDocument<Party>;

@Schema({timestamps:true})
export class Party{

    @Prop({required:true})
    name!: string;

    @Prop({required:true})
    shortname!: string;

    @Prop({default:false})
    isNational?: boolean

    @Prop({default:false})
    isAlive?:boolean

    @Prop({required:true})
    symbol!: string

    @Prop({required:true, type:Types.ObjectId, ref:'User'})
    partyleaderId!: string

    @Prop({default:0})
    partyfund?:number

    @Prop({default:0})
    partymembers?:number

}

export const partySchema = SchemaFactory.createForClass(Party)