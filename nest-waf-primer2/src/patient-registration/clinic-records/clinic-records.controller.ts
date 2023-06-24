import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ClinicRecordsService } from './clinic-records.service';
import { CreateClinicRecordDto } from './dto/create-clinic-record.dto';
import { UpdateClinicRecordDto } from './dto/update-clinic-record.dto';

@Controller('clinic-records')
export class ClinicRecordsController {
  constructor(private readonly clinicRecordsService: ClinicRecordsService) {}

  @Post()
  create(@Body() createClinicRecordDto: CreateClinicRecordDto) {
    return this.clinicRecordsService.create(createClinicRecordDto);
  }

  @Get()
  findAll() {
    return this.clinicRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicRecordsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClinicRecordDto: UpdateClinicRecordDto) {
    return this.clinicRecordsService.update(+id, updateClinicRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicRecordsService.remove(+id);
  }
}
