import { PartialType } from '@nestjs/mapped-types';
import { NewItemDto } from './new-item.dto.js';

export class AmendItemDto extends PartialType(NewItemDto) {}
