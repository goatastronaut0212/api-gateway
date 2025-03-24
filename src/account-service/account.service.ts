import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AccountService {
  constructor(@Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy) {}

  getUsers() {
    return this.client.send('get_users', {});
  }

  createAccount(data: any) {
    console.log('📥 Nhận dữ liệu tạo tài khoản:', data);
    return this.client.send('create_account', data);
  }

  googleLogin(data: any) {
    console.log('📥 Nhận dữ liệu đăng nhập Google:', data);
    return this.client.send('google_login', data);
  }
}