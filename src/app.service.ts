import { Injectable } from '@nestjs/common';
import { TITLE } from './title';

@Injectable()
export class AppService {
  getHello(): string {
    return TITLE;
  }
}
