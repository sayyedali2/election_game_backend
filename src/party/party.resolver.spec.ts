import { Test, TestingModule } from '@nestjs/testing';
import { PartyResolver } from './party.resolver';

describe('PartyResolver', () => {
  let resolver: PartyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartyResolver],
    }).compile();

    resolver = module.get<PartyResolver>(PartyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
