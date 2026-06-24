import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateColumnDto } from "./dto/createColumn.dto";
import { UpdateColumnDto } from "./dto/updateColumn.dto";

@Injectable()
export class ColumnService {
    constructor(private readonly prisma: PrismaService) { }

    async getColumnByBoard(boardId: number) {
        return this.prisma.column.findMany({
            where: { boardId },
            orderBy: { position: 'asc' },
        });
    }

    async createColumn(data: CreateColumnDto) {
        return this.prisma.column.create({ data });
    }

    async updateColumn(id: number, data: UpdateColumnDto) {
        return this.prisma.column.update({ where: { id }, data });
    }

    async deleteColumn(id: number) {
        return this.prisma.column.delete({ where: { id } })
    }
}