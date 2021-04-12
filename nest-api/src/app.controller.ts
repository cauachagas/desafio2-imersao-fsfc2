import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // AppService já está registrado. 
  // appService só precisa do tipo
  // @Controller('/prefixo') e @Get('test') = URL/prefixo/test
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

//HTTP - Get, Post, Put, Patch, Delete