import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OfficeService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly office: ClientProxy,
  ) {}
  createOffice(data: any) {
    return this.office.send('create_office', data);
  }
    getOfficesByCompany(companyId: any) {
        return this.office.send('get_offices_by_company', companyId);
    }
    getOfficeNameByCompany(companyId: number) {
        return this.office.send('get_office_name_by_company', companyId);
    }
    updateOffice(id: number, data: any) {
        return this.office.send('update_office', { id, data });
    }
    deleteOffice(id: number) {
        return this.office.send('delete_office', id);
    }
}
