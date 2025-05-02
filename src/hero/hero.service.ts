import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(_createHeroDto: CreateHeroDto) {
    try {
      return this.databaseService.hero.create({
        data: _createHeroDto,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Already Exist');
      }

      throw new InternalServerErrorException('An unexpected error occured');
    }
  }

  findOne(_id: string) {
    try {
      return this.databaseService.hero.findUnique({
        where: {
          id: _id,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Already Exist');
      }

      throw new InternalServerErrorException('An unexpected error occured');
    }
  }

  update(_id: string, _updateHeroDto: UpdateHeroDto) {
    try {
      return this.databaseService.hero.update({
        where: {
          id: _id,
        },
        data: _updateHeroDto,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Already Exist');
      }

      throw new InternalServerErrorException('An unexpected error occured');
    }
  }

  remove(_id: string) {
    try {
      return this.databaseService.hero.delete({
        where: {
          id: _id,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Already Exist');
      }

      throw new InternalServerErrorException('An unexpected error occured');
    }
  }
}
