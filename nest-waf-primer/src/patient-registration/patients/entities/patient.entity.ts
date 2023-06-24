import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClinicRecord } from "src/patient-registration/clinic-records/entities/clinic-record.entity";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({nullable: true})
    middleName: string;

    @Column()
    surname: string;

    @Column()
    dateOfBirth: string;

    @Column()
    address: string;

    @Column()
    dateOfRegistration: string;
    
    @Column({ default: true })
    matricNumber_21120612455: boolean;


    @OneToMany(type => ClinicRecord, clinic => clinic.patient)
    clinic: ClinicRecord[];  
    
}
