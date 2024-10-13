import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { SearchService } from './searches.service';

@Controller('searches')
export class SearchesController {
  constructor(private readonly searchService: SearchService) {} // Injetando o serviço

  @Post()
  create(@Body() createSearchDto) { 
    return this.searchService.create(createSearchDto);
  }

  @Get()
  findAll() {
    return this.searchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchService.findOne(id);
  }

  @Get('user/:id_user')
  findByUser(@Param('id_user') id_user: string) {
    return this.searchService.findAllByUser(id_user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSearchDto) { // Verifique o nome do DTO
    return this.searchService.update(id, updateSearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.searchService.remove(id);
  }
}
