import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroService } from './hero.service';

@ApiTags('Hero Section')
@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  @ApiOperation({ summary: 'Create New Hero' })
  @ApiBody({ type: CreateHeroDto })
  @ApiResponse({ status: 201, description: 'Hero created successfully' })
  @ApiResponse({
    status: 409,
    description: 'Already Exists',
  })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  create(@Body(ValidationPipe) createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Hero by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Hero found' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  findOne(@Param('id') id: string) {
    return this.heroService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Hero by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateHeroDto })
  @ApiResponse({ status: 200, description: 'Hero updated successfully' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateHeroDto: UpdateHeroDto,
  ) {
    return this.heroService.update(id, updateHeroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Hero by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Hero deleted successfully' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  remove(@Param('id') id: string) {
    return this.heroService.remove(id);
  }
}
