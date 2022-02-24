import { FactoryProvider, Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

import { PrismaService } from './prisma.service';

const prismaClientProvider: FactoryProvider<PrismaClient> = {
  provide: PrismaClient,
  scope: Scope.REQUEST,
  inject: [REQUEST, PrismaService],
  useFactory: (request: Request<{ tenant: string }>, service: PrismaService) =>
    service.getClient(request),
};

@Global()
@Module({
  providers: [PrismaService, prismaClientProvider],
  exports: [PrismaClient],
})
export class DatabaseModule {}
