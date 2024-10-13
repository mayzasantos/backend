import { Module } from '@nestjs/common';
import { SearchesController } from './searches.controller';
import { SearchService } from './searches.service';
import { PrismaService } from 'src/database/prisma.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [SearchesController],
  providers: [SearchService,PrismaService]
})
export class SearchesModule {}
