import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly company: ClientProxy,
  ) {}

  createCompany(data: any) {
    return this.company.send('create_company', data);
  }

  getAllCompanies() {
    return this.company.send('get_all_companies', {});
  }

  getCompany(id: number) {
    return this.company.send('get_company', id);
  }

  updateCompany(id: number, data: any) {
    return this.company.send('update_company', { id, data });
  }

  deleteCompany(id: number) {
    return this.company.send('delete_company', id);
  }

  lockCompany(id: number) {
    return this.company.send('lock_company', id);
  }

  unlockCompany(id: number) {
    return this.company.send('unlock_company', id);
  }

  registerSaleTicketOnPlatform(data: any) {
    return this.company.send('register_sale_ticket_on_platform', data);
  }

  getSaleTicketOnPlatform() {
    return this.company.send('get_sale_ticket_on_platform', '');
  }
}
