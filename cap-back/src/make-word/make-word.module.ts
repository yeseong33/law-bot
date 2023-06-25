import { Module } from '@nestjs/common';
import { MakeWordController } from './make-word.controller.js';
import { MakeWordService } from './make-word.service.js';

@Module({
  controllers: [MakeWordController],
  providers: [MakeWordService],
  exports: [MakeWordService]
})
export class MakeWordModule {}
