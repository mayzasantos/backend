import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UsersModule } from './modules/users/users.module';
import { SellersModule } from './modules/sellers/sellers.module';
import { SearchesModule } from './modules/searches/searches.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthnpmService } from './install/authnpm/authnpm.service';


@Module({
  imports: [UsersModule, SellersModule, SearchesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,PrismaService, AuthnpmService],
})
export class AppModule {}
 