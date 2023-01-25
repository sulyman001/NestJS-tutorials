import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController { // Here are the list of requests
    constructor(private readonly itemsService: ItemsService) {}

    @Get() // Get all request
    findAll():  Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id') // Get one request
    // findOne(@Param() param): string {
    //     return `Item ${param.id}`;
    // }
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post() // Create request
    create(@Body() createItemDto: CreateItemDto ): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id') // Delete request
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }

    @Put(':id') // Update request
    update(@Body() updateItemDto: CreateItemDto, @Param(':id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }
}
