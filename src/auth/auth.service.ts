import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@src/modules/users/users.service';
import { PrismaService } from '@src/database/prisma.service';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dtos/signIn.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  /**
   * Validate user credentials
   * @param email
   * @param password
   * @returns user
   */
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }


  /**
   * 
   * @param user 
   * @returns 
   */
  async login(user: SignInDto) {
    const currentUser = await this.usersService.findByEmail(user.email);
    if (!currentUser) {
      throw new UnauthorizedException('User not found');
    }

    const payload = {
      username: currentUser.email,
      sub: currentUser.cpf,
      roles: currentUser.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
      role: currentUser.roles,
    };
  }
}
