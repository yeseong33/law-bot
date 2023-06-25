import { Module } from '@nestjs/common';
import { AppService } from './app.service.js';
import { MakeWordModule } from './make-word/make-word.module.js';

@Module({
  imports: [MakeWordModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
