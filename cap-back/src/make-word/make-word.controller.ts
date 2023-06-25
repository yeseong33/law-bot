import { Controller, Post } from '@nestjs/common';
import { MakeWordService } from './make-word.service.js';
import { MakeWordInput, MakeWordOutput } from './dto/make-word.dto.js';
import { Body } from '@nestjs/common';
import { MakeContentInput } from './dto/make-content.dto.js';
import { Get } from '@nestjs/common';
import { Res } from '@nestjs/common';
import * as fs from 'fs';
import * as Docxtemplater from 'docxtemplater';

@Controller('make-word')
export class MakeWordController {
    constructor(private readonly makeWordService: MakeWordService) {}
    
    @Post('/')
    async makeWord(
        @Body() makeWordInput: MakeWordInput
      ): Promise<MakeWordOutput> {

        const htmlString = makeWordInput.htmlString
        const filePath = './example.docx';
        const here = {htmlString, filePath}
        return this.makeWordService.makeWord(here);
      }

    @Get('/content')
    async makeContent(
        @Body() makeContentInput: MakeContentInput
      ): Promise<any> {
        return this.makeWordService.makeContent(makeContentInput)
      }

    @Get('/download')
    async downloadWord(
        @Res() res
      ){
        const filePath = './example.docx';
        res.download(filePath, 'example.docx', (err) => {
          if (err) {
            // 다운로드 중 오류 발생 시 예외 처리
            res.status(500).send('다운로드 중 오류가 발생했습니다.');
          }
        });

      }    
}
