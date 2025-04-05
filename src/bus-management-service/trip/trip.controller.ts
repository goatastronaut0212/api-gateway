import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TripService } from "./trip.service";

@Controller("v2/trip")
export class TripController {
    constructor(private readonly tripService: TripService) {}
    
    @Post("/search")
    seachTripOnPlatform(@Body() data: any) {
        return this.tripService.seachTripOnPlatform(data);
    }
    @Get("/get-trip-detail-on-platform/:id")
    getTripDetailOnPlatform(@Param("id") id: any) {
        return this.tripService.getTripDetailOnPlatform(id);
    }

    @Post("/get-trip-by-date-and-route")
    getTripsByDateAndRouteAPI(@Body() data: any) {
        return this.tripService.getTripsByDateAndRouteAPI(data);
    }
}