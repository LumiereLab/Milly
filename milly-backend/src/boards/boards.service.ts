import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBoardDto } from "./dto/createBoard.dto";

@Injectable()
export class BoardsService {
    constructor(private readonly prisma: PrismaService){}

    async getBoard(id: number){
        return this.prisma.board.findUniqueOrThrow({
            where: {id}
        });
    }

    async storeBoard(data: CreateBoardDto){
        return this.prisma.board.create({
            data,
        });
    }

    async deleteBoard(id: number){
        return this.prisma.board.delete({
            where: { id },
        });
    }
}