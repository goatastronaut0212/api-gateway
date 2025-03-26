import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class RouteService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly route: ClientProxy,
  ) {}
  
}