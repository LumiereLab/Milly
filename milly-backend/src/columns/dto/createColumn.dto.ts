import { IsString, isNotEmpty, IsNumber, IsNotEmpty } from "class-validator";

export class CreateColumnDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    position: number;

    @IsNotEmpty()
    @IsNumber()
    boardId: number;
}