import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  controllers: [HeroController],
  providers: [HeroService],
  imports: [DatabaseModule],
})
export class HeroModule {}
