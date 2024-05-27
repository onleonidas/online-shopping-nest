// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from 'src/database/prisma.service';
import { LocalStrategy } from './local.strategy';
import { UsersService } from 'src/modules/users/users.service';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy, PrismaService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
