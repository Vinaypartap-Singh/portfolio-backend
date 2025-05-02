import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { HeaderController } from './header.controller';
import { HeaderService } from './header.service';

@Module({
  controllers: [HeaderController],
  providers: [HeaderService],
  imports: [DatabaseModule],
})
export class HeaderModule {}
