import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class NewsService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}
  registerReceiveNews(data: any) {
    return this.client.send('register_receive_news', data);
  }
  getListReceiveNews() {
    return this.client.send('get_list_receive_news', {});
  }
}
