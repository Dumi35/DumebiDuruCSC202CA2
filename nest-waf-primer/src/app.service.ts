import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(): {} {
    return {message: 'Hello Dumebi my love!', title: 'My Greeting App'};
  }

  getHome(): {} {
    return {title: 'Home Page'};
  }

  getTime(): {} {
    return {title: 'Home Page'}
  }
  
}


