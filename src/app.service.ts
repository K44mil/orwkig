import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  title = 'Obliczenia rozproszone w klastrach i gridach';
  
  getHello(): string {
    return `${this.title}`;
  }
}
