import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument, Types } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User{
    @Prop({required:true})
    name!:string;

    @Prop({required:true})
    email!: string;

    @Prop({required:true})
    password!: string;

    @Prop({required:true, default:'Independent', type:Types.ObjectId, ref:'Party'})
    party!: string;

    @Prop({default:0})
    coins?: number

    @Prop()
    avatar?:string

    @Prop({default:0})
    electionParticipation?:number

    @Prop({default:0})
    electionWin?:number

    @Prop({default:0})
    electionLost?: number

}

export const userSchema = SchemaFactory.createForClass(User)