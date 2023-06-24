import { Controller, Get, Render,Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} //dependency injection

 /*  @Get('home')
  @Render('index.html')
  getHome(): {} {
    return this.appService.getHome();
  } */

  @Get()
  getHostname(@Req() request: Request): string {
    return request.hostname;
  }

}


