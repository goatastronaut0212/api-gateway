import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ScheduleService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly schedule: ClientProxy,
  ) {}

  createSchedule(data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.schedule.send('create_schedule', data);
  }
  getScheduleByCompany(id: any) {
    console.log('Sending request to Bus Management Service:', id);
    return this.schedule.send('get_schedule_by_company', id);
  }
  deleteSchedule(id: number) {
    console.log('Sending request to Bus Management Service:', id);
    return this.schedule.send('delete_schedule', id);
  }
  updateSchedule(id: number, data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.schedule.send('update_schedule', { id, data });
  }
}
