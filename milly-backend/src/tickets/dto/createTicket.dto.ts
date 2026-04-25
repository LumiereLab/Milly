import { isString, IsString } from 'class-validator';
export class CreateTicketDto {
  @IsString()
  title: string;
  @IsString()
  status: string;
}
