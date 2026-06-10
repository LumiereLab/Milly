import { Post, Get, Put, Patch, Delete, Controller, Body, Param } from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from "./dto/createBoard.dto";

@Controller()
export class BoardController {
    constructor(private readonly appService: BoardsService) { }

    @Get('boards')
    getBoards() {
        return this.appService.getBoards();
    }

    @Get('/board/:id')
    getBoard(@Param('id') id: string) {
        return this.appService.getBoard(Number(id));
    }

    @Post('boards/')
    storeBoard(@Body() data: CreateBoardDto) {
        return this.appService.storeBoard(data);
    }

    @Delete('boards/:id')
    deleteBoard(@Param('id') id: string) {
        return this.appService.deleteBoard(Number(id));
    }

}