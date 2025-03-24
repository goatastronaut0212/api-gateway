import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('/google-login')
  googleLogin(@Body() data: any) {
    return this.authService.googleLogin(data);
  }
  
}