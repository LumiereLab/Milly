import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateBoardDto {

    @IsNotEmpty()
    @IsNumber()
    owner: number;


    @IsNotEmpty()
    @IsString()
    title: string;


    @IsString()
    description: string;


}