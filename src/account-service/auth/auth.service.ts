import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AuthService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}

  googleLogin(data: any) {
    console.log('📥 Nhận dữ liệu đăng nhập Google:', data);
    return this.client.send('google_login', data);
  }
}