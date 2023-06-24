import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    const array=this.patientsService.findAll()
    console.log(array)
    return array;
  }

  @Get('home')
  @Render('home.html')
  getHome(): {} {
    return this.patientsService.getHome();
  }

  @Get('create')
  @Render('patients/create-patient.html')
    createForm() {
  }

  @Get('update')
  @Render('patients/update-patient.html')
    updateForm(){

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  } 

  /* @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.updateUser(+id, updatePatientDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
