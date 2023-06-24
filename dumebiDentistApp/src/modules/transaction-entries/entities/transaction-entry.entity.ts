import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transaction_entry')
export class TransactionEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  firstname: string;

  @Column('varchar')
  middlename: string;

  @Column('varchar')
  surname: string;

  @Column('int',{default: new Date().getDate()})
  birthDay: number;

  @Column('int',{default: new Date().getMonth()})
  birthMonth: number;

  @Column('int',{default: new Date().getFullYear()})
  birthYear: number;

  @Column('varchar')
  address: string;

  @Column('varchar',{default: new Date().getDate()})
  regdate: string;

  @Column('boolean',{default: true})
  matricno: boolean
}
