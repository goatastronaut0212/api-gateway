import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { PolicyService } from './policy.service';

@Controller('v2/policy')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Post('/create-policy/:id')
  createPolicy(@Param('id') id: number, @Body() data: any) {
    return this.policyService.createPolicy(id, data.content);
  }

  @Put('/update-policy/:id')
  updatePolicy(@Param('id') id: number, @Body() content: string) {
    return this.policyService.updatePolicy(id, content);
  }
}
