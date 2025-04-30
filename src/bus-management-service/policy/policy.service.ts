import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PolicyService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly policy: ClientProxy,
  ) {}

  createPolicy(id: number, content: string) {
    return this.policy.send('create_policy', { id, content });
  }

  updatePolicy(id: number, content: string) {
    return this.policy.send('update_policy', { id, content });
  }
}
