import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class PatientsService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>
    ){}

    async create(createPatientDto: CreatePatientDto) {
    const newPatient: Patient = this.patientsRepository.create(createPatientDto)
    return this.patientsRepository.save(newPatient);
    //return 'This action adds a new user';
    }

    async findAll() {
    //return `This action returns all users`;
    return await this.patientsRepository.find();
     
    }

    async getHome():Promise<{}>{
      const users= await this.patientsRepository.find();
      console.log(users[0])
      return {firstName: users[1].firstName, surname: users[1].surname, DOB: users[1].dateOfBirth,
      DOR: users[1].dateOfRegistration, address: users[1].address}
    }

    async findOne(id: number) {
      //return `This action returns a #${id} user`;
      return await this.patientsRepository.findOne({
      where: {
      id // same as id:id
      }
      });
    }

    async update(id: number, updatePatientDto: UpdatePatientDto) {
      //return `This action updates a #${id} user`;
      return await this.patientsRepository.update(id, updatePatientDto);
    }

    async remove(id: number) {
      //return `This action removes a #${id} user`;
      return await this.patientsRepository.delete(id);
    }

    async updateUser(id: number, updatePatientDto: UpdatePatientDto): Promise<Patient> {
      const user = await this.patientsRepository.findOne({
        where: {
        id // same as id:id
        }
        })
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      // Update the user properties based on the provided DTO
      Object.assign(user, updatePatientDto);
  
      return this.patientsRepository.save(user);
    }
  
    
}
