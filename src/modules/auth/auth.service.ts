import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SellersService } from '../sellers/sellers.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private sellerService: SellersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findEmail(email);
    const seller = await this.sellerService.findEmail(email)
    if (!user && !seller){
        console.log('Usuário não encontrado')
        throw new UnauthorizedException()
    }
   
    if (user){
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (!passwordMatch) {
          console.log('Senha Incorreta')
          throw new UnauthorizedException('Credenciais inválidas');
      }
      
      const payload = { sub: user.id, username: user.name };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }

    if (seller){
      const passwordMatch = await bcrypt.compare(password, seller.password)
      if (!passwordMatch) {
          console.log('Senha Incorreta')
          throw new UnauthorizedException('Credenciais inválidas');
      }
      
      const payload = { sub: seller.id, username: seller.name };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }
}