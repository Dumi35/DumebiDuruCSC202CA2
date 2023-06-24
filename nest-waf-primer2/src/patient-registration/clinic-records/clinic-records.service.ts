/* import { Injectable } from '@nestjs/common';
import { CreateClinicRecordDto } from './dto/create-clinic-record.dto';
import { UpdateClinicRecordDto } from './dto/update-clinic-record.dto';

@Injectable()
export class ClinicRecordsService {
  create(createClinicRecordDto: CreateClinicRecordDto) {
    return 'This action adds a new clinicRecord';
  }

  findAll() {
    return `This action returns all clinicRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinicRecord`;
  }

  update(id: number, updateClinicRecordDto: UpdateClinicRecordDto) {
    return `This action updates a #${id} clinicRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinicRecord`;
  }
}
 */


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicRecordDto } from './dto/create-clinic-record.dto';
import { UpdateClinicRecordDto } from './dto/update-clinic-record.dto';
import { ClinicRecord } from './entities/clinic-record.entity';
import { Patient } from '../patients/entities/patient.entity';
import { PatientsService } from '../patients/patients.service';

@Injectable()
export class ClinicRecordsService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(ClinicRecord)
    private clinicRepository: Repository<ClinicRecord>
    //private readonly patientsService: PatientsService    
  ){}

   /*  public doSomething():void {
      const patient: Repository<Patient>=this.patientsService.findOne(1)
    } */

    async create(createClinicRecordDto: CreateClinicRecordDto) {
    const newClinicRecord: ClinicRecord = this.clinicRepository.create(createClinicRecordDto)
    return this.clinicRepository.save(newClinicRecord);
    //return 'This action adds a new user';
    }

    async findAll() {
    //return `This action returns all users`;
    return await this.clinicRepository.find();
     
    }

    async getHome():Promise<{}>{
      return await this.clinicRepository.find();
      /* console.log(users[0])
      return {firstName: users[1].firstName, surname: users[1].surname, DOB: users[1].dateOfBirth,
      DOR: users[1].dateOfRegistration, address: users[1].address} */
    }

    async findOne(id: number) {
      //return `This action returns a #${id} user`;
      return await this.clinicRepository.findOne({
      where: {
      id // same as id:id
      }
      });
    }

    async update(id: number, updateClinicRecordDto: UpdateClinicRecordDto) {
      //return `This action updates a #${id} user`;
      return await this.clinicRepository.update(id, updateClinicRecordDto);
    }

    async remove(id: number) {
      //return `This action removes a #${id} user`;
      return await this.clinicRepository.delete(id);
    }

    async updateUser(id: number, updateClinicRecordDto: UpdateClinicRecordDto): Promise<ClinicRecord> {
      const user = await this.clinicRepository.findOne({
        where: {
        id // same as id:id
        }
        })
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      // Update the user properties based on the provided DTO
      Object.assign(user, updateClinicRecordDto);
  
      return this.clinicRepository.save(user);
    }
  
    
}
