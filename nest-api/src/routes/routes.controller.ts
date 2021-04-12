import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';

@Controller('routes')
export class RoutesController {
    constructor(private routesService: RoutesService){}

    @Get()
    async getRoutes(): Promise<Route[]> {
        return this.routesService.findAll()
    }
}
