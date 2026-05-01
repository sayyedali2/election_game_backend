import { Module } from '@nestjs/common';
import { PartyService } from './party.service';
import { PartyResolver } from './party.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [PartyService, PartyResolver],
  imports:[UserModule]
})
export class PartyModule {}
