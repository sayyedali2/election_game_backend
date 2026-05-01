import { Injectable } from '@nestjs/common';
import { Party } from './schemas/Party.schema';
import { CreatePartyDTO } from './dto/createParty.dto';
import { UserService } from 'src/user/user.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class PartyService {
    constructor(@InjectModel(Party.name) private partyModel:Model<Party>, private userService:UserService){}

    async createParty(userId:string,data:CreatePartyDTO){
        //user doesn't belogns to other party
        //user must be Participated in 10 elections
        //user must be spent 5lakh for new party
        //user must to fill the form 
        //party created
        try {
            const user = await this.userService.findById(userId)
    
            if(!user){
                throw new Error ("UserId not found in party creation")
            }
            
            if(user.party!='Independent'){
                throw new Error("User already joind a party")
            }
            
            if(user.electionParticipation !== undefined && user.electionParticipation<10){
                throw new Error("User election Participation is less than 10")
            }
    
            if(user.coins !== undefined && user.coins<500000){
                throw new Error("Insufficient coins for party creation")
            }
    
            user.coins! -=500000
            await user.save()
            
           await this.partyModel.create({
            ...data,
            partyleaderId:userId,
           })
        } catch (error) {
            throw new Error(error)
        }
    }

    
}
