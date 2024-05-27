import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signIn.dto';
import { AuthGuard } from './auth.guard';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Autenticar um usuário' })
  @ApiBody({ type: SignInDto })
  signIn(@Body() user: SignInDto) {
    console.log('User:', user);
    return this.authService.login(user);
  }
}