import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicRecordDto } from './create-clinic-record.dto';

export class UpdateClinicRecordDto extends PartialType(CreateClinicRecordDto) {}
