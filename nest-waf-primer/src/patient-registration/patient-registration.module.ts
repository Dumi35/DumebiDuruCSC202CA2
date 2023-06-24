import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { ClinicRecordsModule } from './clinic-records/clinic-records.module';

@Module({
  imports: [PatientsModule, ClinicRecordsModule]
})
export class PatientRegistrationModule {}
