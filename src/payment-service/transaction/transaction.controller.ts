import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('v3/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}
  @Get('/get-transaction-history')
  async getTransactionHistory() {
    console.log('Fetching transaction history...');
    return this.transactionService.getTransactionHistory();
  }
}
