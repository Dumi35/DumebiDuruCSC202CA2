
import { Patient } from "src/patient-registration/patients/entities/patient.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClinicRecord {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    clinicDate: Date;

    @Column({nullable: true})
    natureOfAilment: string;

    @Column()
    medicinePrescribed: string;

    @Column()
    procedureUndertaken: string;

    @Column({nullable: true})
    dateOfNextAppointment: Date;

    @ManyToOne(type => Patient, patient => patient.clinic)
    patient: Patient;  
}
