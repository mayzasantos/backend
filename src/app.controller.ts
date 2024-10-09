import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';


@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
  ){}

  @Get('hello')
  async getHello(){
    const user =  await this.prisma.user.create({
      data:{
        id: 'teste',
        name: 'mayza',
        lastname:'santos',
        cpf: '11710738790',
        license: '8547843665',
        phone: '21981035426',
        email: 'mayza@mail.com',
        cep: '20211280',
        address: 'rua carolina reidner',
        number: '29',
        complement: 'apto 101',
        district: 'catumbi',
        uf: 'rj',
        password: 'tr200514',
        city: 'Rio de Janeiro',
        contact: true
      }
    })
    return {
      user
    }
  }
}
