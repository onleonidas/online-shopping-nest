import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { SignInDto } from './dtos/signIn.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

export interface UserContext {
  cpf: string;
  email: string;
  roles: string;
}


@Injectable()
export class AuthService {


  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async signIn(data: SignInDto): Promise<{access_token: string, user: UserContext}> {
    const user = await this.usersService.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const roles = await this.usersService.getUserRoles(user.cpf);

    const userContext = { cpf: user.cpf, email: user.email, roles: roles };

    console.log('teste', roles);

    const payload = { sub: user.cpf, email: user.email, roles: roles};
    const accessToken = await this.jwtService.signAsync(payload);
    return {access_token: accessToken, user: userContext};
  }
}