import { IsNotEmpty, IsNumber, isNumber, IsString, IsInt } from 'class-validator';
export class CreateTicketDto {

  @IsString({ message: 'Title must be a string!' })
  @IsNotEmpty({ message: 'Title cannot be empty!' })
  title: string;

  @IsString({ message: 'Status must be a string!' })
  @IsNotEmpty({ message: 'Status cannot be empty!' })
  status: string;

  @IsString()
  description: string;

  @IsNumber()
  owner: number;

  @IsNumber()
  asignee: number;

  @IsInt()
  boardId: number;

  @IsInt()
  columnId: number;
}
