import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  private routes: Route[] = [
    { 
      title: 'Primeiro', 
      startPosition: {lat:-15.82594, lng:-47.92923}, 
      endPosition: {lat:-15.82942, lng:-47.92765}
    },
    { 
      title: 'Segundo', 
      startPosition: {lat:-15.82449, lng:-47.92756}, 
      endPosition: {lat:-15.8276, lng:-47.92621}
    },
    { 
      title: 'Terceiro', 
      startPosition: {lat:-15.82331, lng:-47.92588}, 
      endPosition: {lat:-15.82758, lng:-47.92532}
    },
    { 
      title: 'Quarto', 
      startPosition: {lat:-15.83, lng:-47.92688}, 
      endPosition: {lat:-15.82921, lng:-47.92417}
    },
    { 
      title: 'Quinto', 
      startPosition: {lat:-15.82208, lng:-47.92519}, 
      endPosition: {lat:-15.83061, lng:-47.92573}
    }
  ];

  async findAll() {
      return this.routes
  }
}

