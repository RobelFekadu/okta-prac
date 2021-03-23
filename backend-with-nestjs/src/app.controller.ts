import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller('/todolist')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('bearer'))
  getTodoList(): any[] {
    return this.appService.getToDoList();
  }

  @Post()
  @UseGuards(AuthGuard('bearer'))
  markAsComplete(@Body() id: any): any {
    return this.appService.markAsCompleted(id);
  }
}
