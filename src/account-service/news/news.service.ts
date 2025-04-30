import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class NewsService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}
  registerReceiveNews(data: any) {
    console.log('📥 Nhận dữ liệu đăng ký nhận tin tức:', data);
    return this.client.send('register_receive_news', data);
  }
}
