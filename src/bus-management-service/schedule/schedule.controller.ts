import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";

@Controller('v2/schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) {}

    @Post('create-schedule')
    createSchedule(@Body() data: any) {
        return this.scheduleService.createSchedule(data);
    }

    @Get('get-schedule-by-company/:id')
    getScheduleByCompany(@Param('id') id: number) {
        return this.scheduleService.getScheduleByCompany(id);
    }

    @Delete('delete-schedule/:id')
    deleteSchedule(@Param('id') id: number) {
        return this.scheduleService.deleteSchedule(id);
    }
    @Put('update-schedule/:id')
    updateSchedule(@Param('id') id: number, @Body() data: any) {
        return this.scheduleService.updateSchedule(id, data);
    }
}