import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class CompanyService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly company: ClientProxy,
  ) {}

  createCompany(data: any) {
    return this.company.send('create_company', data);
  }
  getAllCompanies() {
    return this.company.send('get_all_companies', '');
  }
  updateCompany(id: number, data: any) {
    return this.company.send('update_company', { id, data });
  }
  deleteCompany(id: number) {
    console.log('deleteCompany', id);
    return this.company.send('delete_company', id);
  }
  lockCompany(id: number) {
    return this.company.send('lock_company', id);
  }
  unlockCompany(id: number) {
    return this.company.send('unlock_company', id);
  }
}