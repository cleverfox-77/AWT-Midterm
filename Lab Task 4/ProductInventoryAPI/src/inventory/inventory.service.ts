import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryItem } from './entities/inventory-item.entity.js';
import { NewItemDto } from './dto/new-item.dto.js';
import { ReplaceItemDto } from './dto/replace-item.dto.js';
import { AmendItemDto } from './dto/amend-item.dto.js';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryItem)
    private readonly items: Repository<InventoryItem>,
  ) {}

  async create(dto: NewItemDto) {
    const item = await this.items.save(this.items.create(dto));
    return {
      message: 'Product created successfully',
      data: item,
    };
  }

  async findAll() {
    const items = await this.items.find({
      order: { createdAt: 'DESC' },
    });
    return {
      message: 'All products fetched successfully',
      count: items.length,
      data: items,
    };
  }

  async findOne(id: number) {
    const item = await this.require(id);
    return {
      message: 'Product fetched successfully',
      data: item,
    };
  }

  async search(keyword: string) {
    const items = await this.items
      .createQueryBuilder('item')
      .where('item.name ILIKE :keyword', { keyword: `%${keyword}%` })
      .orderBy('item.createdAt', 'DESC')
      .getMany();
    return {
      message: 'Products found successfully',
      count: items.length,
      data: items,
    };
  }

  async findByCategory(category: string) {
    const items = await this.items.find({
      where: { category },
      order: { createdAt: 'DESC' },
    });
    return {
      message: 'Products fetched by category successfully',
      count: items.length,
      data: items,
    };
  }

  async update(id: number, dto: AmendItemDto) {
    const item = await this.patch(id, dto);
    return {
      message: 'Product updated successfully',
      data: item,
    };
  }

  async replace(id: number, dto: ReplaceItemDto) {
    const item = await this.patch(id, dto);
    return {
      message: 'Product replaced successfully',
      data: item,
    };
  }

  async toggleActive(id: number) {
    const item = await this.require(id);
    item.isActive = !item.isActive;
    const updated = await this.items.save(item);
    return {
      message: 'Product active status toggled successfully',
      data: updated,
    };
  }

  async remove(id: number) {
    await this.require(id);
    await this.items.delete(id);
    return {
      message: 'Product deleted successfully',
      id,
    };
  }

  private async patch(id: number, dto: AmendItemDto) {
    await this.require(id);
    await this.items.update(id, dto);
    return this.require(id);
  }

  private async require(id: number) {
    const item = await this.items.findOne({ where: { id } });
    if (!item) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return item;
  }
}
