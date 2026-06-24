import { PartialType, OmitType } from "@nestjs/mapped-types";
import { CreateColumnDto } from "./createColumn.dto";

export class UpdateColumnDto extends PartialType(
    OmitType(CreateColumnDto, ['boardId'] as const)
) { }