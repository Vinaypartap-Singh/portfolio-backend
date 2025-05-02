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
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';
import { HeaderService } from './header.service';

@ApiTags('Header Options')
@Controller('header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Post()
  @ApiOperation({ summary: 'Create New Header' })
  @ApiBody({ type: CreateHeaderDto })
  @ApiResponse({ status: 201, description: 'Header created successfully' })
  @ApiResponse({
    status: 409,
    description: 'Already Exists',
  })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  create(@Body(ValidationPipe) createHeaderDto: CreateHeaderDto) {
    return this.headerService.create(createHeaderDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Header by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Header found' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  findOne(@Param('id') id: string) {
    return this.headerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Header by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateHeaderDto })
  @ApiResponse({ status: 200, description: 'Header updated successfully' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateHeaderDto: UpdateHeaderDto,
  ) {
    return this.headerService.update(id, updateHeaderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Header by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Header deleted successfully' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  remove(@Param('id') id: string) {
    return this.headerService.remove(id);
  }
}
