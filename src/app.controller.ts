import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/prefixo')
export class AppController {
  //Container de serviços
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }
}
