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
}