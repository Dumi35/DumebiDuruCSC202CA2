import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicRecordsService } from './clinic-records.service';
import { ClinicRecordsController } from './clinic-records.controller';
import { ClinicRecord } from './entities/clinic-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClinicRecord])],
  controllers: [ClinicRecordsController],
  providers: [ClinicRecordsService]
})
export class ClinicRecordsModule {}
