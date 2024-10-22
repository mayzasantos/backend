import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { SellersService } from './sellers.service';

@Controller('sellers')
export class SellersController {
    constructor(private readonly sellersService: SellersService){}

    @Post()
    create(@Body() createUserDto) {
      return this.sellersService.create(createUserDto);
    }
  
    @Get()
    findAll() {
      return this.sellersService.findAll();
    }
  
    @Get('email')
    findEmail(@Body() email:string){
      return  this.sellersService.findEmail(email)
    }
  
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.sellersService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto) {
      return this.sellersService.update(id, updateUserDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.sellersService.remove(id);
    }
    
   
}
