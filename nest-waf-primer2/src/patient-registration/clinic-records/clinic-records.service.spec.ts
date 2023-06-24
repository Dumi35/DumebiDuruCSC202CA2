import { Test, TestingModule } from '@nestjs/testing';
import { ClinicRecordsService } from './clinic-records.service';

describe('ClinicRecordsService', () => {
  let service: ClinicRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicRecordsService],
    }).compile();

    service = module.get<ClinicRecordsService>(ClinicRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
