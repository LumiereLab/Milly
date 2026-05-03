import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTicketDto {
  
  @IsString( {message: 'Title must be a string!'} )
  @IsNotEmpty( {message:'Title cannot be empty!'} )
  title: string;

  @IsString( {message: 'Status must be a string!'} )
  @IsNotEmpty({ message: 'Status cannot be empty!'})
  status: string;
}
