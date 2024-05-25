import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { SignInDto } from './dtos/signIn.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {


  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async signIn(data: SignInDto): Promise<{access_token: string}> {
    const user = await this.usersService.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { sub: user.cpf, email: user.email };
    return {access_token: await this.jwtService.signAsync(payload)};
  }
}