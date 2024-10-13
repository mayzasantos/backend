import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SearchCreateInput) {
    return this.prisma.search.create({ data });
  }

  async findAll() {
    return this.prisma.search.findMany();
  }

  async findOne(id: string) {
    return this.prisma.search.findFirst({ where: { id } });
  }

  async findAllByUser(id_user: string) {
    return this.prisma.search.findMany({ where: { id_user } });
  }

  async update(id: string, data: Prisma.SearchUpdateInput) {
    return this.prisma.search.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.search.delete({ where: { id } });
  }
}