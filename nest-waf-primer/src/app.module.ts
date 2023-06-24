/*  */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientRegistrationModule } from './patient-registration/patient-registration.module';

@Module({
    imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "dumebi-duru-toothfixers-postgres-csc202-ca",
    entities: [
    "dist/**/*.entity{.ts,.js}"
    ],
    synchronize: true
    }), PatientRegistrationModule],
    controllers: [AppController],
    providers: [AppService],
    })
    export class AppModule {}
