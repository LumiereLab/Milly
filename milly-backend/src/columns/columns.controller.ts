import { Post, Patch, Put, Delete, Get, Body, Param, Controller } from "@nestjs/common";
import { ColumnsService } from "./columns.service";
import { CreateColumnDto } from "./dto/createColumn.dto";
import { UpdateColumnDto } from "./dto/updateColumn.dto";

@Controller()
export class ColumnsController {
    constructor(private readonly columnsService: ColumnsService) { }

    @Get('boards/:id/columns')
    getColumnsByBoard(@Param('id') id: string) {
        return this.columnsService.getColumnsByBoard(Number(id));
    }

    @Post('boards/:id/column')
    createColumn(@Param('id') id: string, @Body() body: CreateColumnDto) {
        return this.columnsService.createColumn(Number(id), body);
    }

    @Patch('boards/:boardId/column/:id')
    updateColumn(@Param('id') id: string, @Body() body: UpdateColumnDto) {
        return this.columnsService.updateColumn(Number(id), body);
    }

    @Delete('column/:id')
    deleteColumn(id: string) {
        return this.columnsService.deleteColumn(Number(id));
    }
}
