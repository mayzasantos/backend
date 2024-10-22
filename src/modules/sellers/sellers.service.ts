import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SellersService {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.SellerCreateInput){
        return this.prisma.seller.create({ data })
    }

    async findAll(){
        return this.prisma.seller.findMany()
    }

    async findEmail(email:string){
        return this.prisma.seller.findFirst({ where: { email }})
    }

    async findOne(id: string) {
        return this.prisma.seller.findFirst({ where: { id } });
    }
    
    async update(id: string, data: Prisma.SellerUpdateInput) {
    return this.prisma.seller.update({ where: { id }, data });
    }

    async remove(id: string) {
    return this.prisma.seller.delete({ where: { id } });
    }
}
