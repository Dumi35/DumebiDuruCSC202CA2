import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('asset_entry')
export class AssetEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int',{default: new Date().getDate()})
  clinicDay: number;

  @Column('int', {default: new Date().getMonth()})
  clinicMonth: number;

  @Column('int',{default: new Date().getFullYear()})
  clinicYear: number;

  @Column('varchar')
  natureofailment: string;

  @Column('varchar')
  medicineprescribed: string;

  @Column('varchar')
  procedureundertaken: string;

  @Column('varchar')
  nextappdate: string;
}
