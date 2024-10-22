import { Module } from '@nestjs/common';
import { SellersController } from './sellers.controller';
import { SellersService } from './sellers.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [SellersController],
  exports:[SellersService],
  providers: [SellersService, PrismaService]
})
export class SellersModule {}
