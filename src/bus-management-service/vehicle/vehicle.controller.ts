import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { VehicleService } from "./vehicle.service";

@Controller("v2/vehicle")
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) {}
    @Post("/create-vehicle")
    createVehicle(@Body() data: any) {
        return this.vehicleService.createVehicle(data);
    }
    @Get("/get-vehicle-by-company/:id")
    getVehicleByCompany(@Param("id") id: any) {
        return this.vehicleService.getVehicleByCompany(id);
    }
    @Delete("/delete-vehicle/:id")
    deleteVehicle(@Param("id") id: number) {
        return this.vehicleService.deleteVehicle(id);
    }
    @Put("/update-vehicle/:id")
    updateVehicle(@Param("id") id: number, @Body() data: any) {
        return this.vehicleService.updateVehicle(id, data);
    }
}