import { Test, TestingModule } from '@nestjs/testing';
import { ClinicRecordsController } from './clinic-records.controller';
import { ClinicRecordsService } from './clinic-records.service';

describe('ClinicRecordsController', () => {
  let controller: ClinicRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicRecordsController],
      providers: [ClinicRecordsService],
    }).compile();

    controller = module.get<ClinicRecordsController>(ClinicRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
