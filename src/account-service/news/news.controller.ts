import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('v1/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('/register-receive-news')
  registerReceiveNews(@Body() data: any) {
    return this.newsService.registerReceiveNews(data);
  }
  @Get('/get-list-receive-news')
  getListReceiveNews() {
    return this.newsService.getListReceiveNews();
  }
}
