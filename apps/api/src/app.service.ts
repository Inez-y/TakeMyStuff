import { Injectable } from '@nestjs/common';
import { PrismaService } from './common/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<string> {
    const productCount = await this.prisma.product.count();
    return `Hello, World! Products in DB: ${productCount}`;
  }
}
