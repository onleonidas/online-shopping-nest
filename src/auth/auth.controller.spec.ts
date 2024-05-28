import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signIn.dto';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest.fn().mockResolvedValue({ token: 'test_token' }),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('signIn', () => {
    it('should return a token when credentials are valid', async () => {
      const signInDto: SignInDto = { email: 'test', password: 'test' };

      const result = await authController.signIn(signInDto);

      expect(result).toEqual({ token: 'test_token' });
      expect(authService.login).toHaveBeenCalledWith(signInDto);
    });

    it('should throw an error if login fails', async () => {
      const signInDto: SignInDto = { email: 'test', password: 'test' };
      jest.spyOn(authService, 'login').mockRejectedValueOnce(new Error('Invalid credentials'));

      await expect(authController.signIn(signInDto)).rejects.toThrow('Invalid credentials');
    });
  });
});
