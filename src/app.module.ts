import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HeaderModule } from './header/header.module';

@Module({
  imports: [DatabaseModule, HeaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
