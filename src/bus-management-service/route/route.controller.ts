import { Controller } from "@nestjs/common";
import { RouteService } from "./route.service";

@Controller('v2/route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  
}