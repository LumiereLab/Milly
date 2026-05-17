import { Post, Get, Put, Patch, Delete, Controller, Body, Param } from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from "./dto/createBoard.dto";

@Controller()
export class AppController {
    constructor(private readonly appService: BoardsService){}

    @Get('/board/:id')
    getBoard(@Param('id') id: string){
        return this.appService.getBoard(Number(id));
    }

    @Post('/board/new')
    storeBoard(@Body()data: CreateBoardDto){
        return this.appService.storeBoard(data);
    }

    @Delete('board/:id')
        deleteBoard(@Param('id')id: string){        
        return this.appService.deleteBoard(Number(id));
    }
    
}