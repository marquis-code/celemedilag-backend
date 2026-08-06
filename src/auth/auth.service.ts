import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Hardcoded simple admin validation
    if (email === 'admin@celemedilag.org' && password === 'admin123') {
      const payload = { email, sub: 'admin' };
      return {
        access_token: this.jwtService.sign(payload),
        user: { email, role: 'admin' }
      };
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
