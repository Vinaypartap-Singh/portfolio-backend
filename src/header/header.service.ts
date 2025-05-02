import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';

@Injectable()
export class HeaderService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(_createHeaderDto: CreateHeaderDto) {
    try {
      return this.databaseService.header.create({
        data: _createHeaderDto,
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
      return this.databaseService.header.findUnique({
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

  update(_id: string, _updateHeaderDto: UpdateHeaderDto) {
    try {
      return this.databaseService.header.update({
        where: {
          id: _id,
        },
        data: _updateHeaderDto,
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
      return this.databaseService.header.delete({
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
