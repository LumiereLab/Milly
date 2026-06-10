import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentdto } from './dto/createComment.dto';


@Injectable()
export class CommentService { }