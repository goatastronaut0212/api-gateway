import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('/google-login')
  googleLogin(@Body() data: any) {
    return this.authService.googleLogin(data);
  }

  @Post('/facebook-login')
  facebookLogin(@Body() data: any) {
    return this.authService.facebookLogin(data);
  }

  // E1.UC1: Username/Password Login
  @Post('/bms-login')
  bmsLogin(@Body() data: any) {
    return this.authService.bmsLogin(data);
  }
  
}