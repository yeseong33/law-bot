import { Injectable } from '@nestjs/common';
import fs from 'fs';
import HTMLtoDOCX from 'html-to-docx';
import { MakeWordInput, MakeWordOutput } from './dto/make-word.dto';
import { MakeContentInput, MakeContentOutput } from './dto/make-content.dto';

@Injectable()
export class MakeWordService {

    async makeWord(
        makeWordInput: MakeWordInput
      ): Promise<MakeWordOutput> {
        // 버퍼 생성
        const fileBuffer = await HTMLtoDOCX(makeWordInput.htmlString, null, {
            table: { row: { cantSplit: true } },
            footer: true,
            pageNumber: true,
        })

      
        // 파일정보 쓰기
        fs.writeFile(makeWordInput.filePath, fileBuffer, (error) => {
            if (error) {
                console.log('Docx file creation failed');
                return {
                  ok: false,
                }
              }
              console.log('Docx file created successfully');
              return {
                ok: true,
              }
        })

        return 
      }

      async makeContent(
        makeContentInput: MakeContentInput
      ): Promise<MakeContentOutput> {

        const content = `${makeContentInput.eventPlace}에서 ${makeContentInput.contents}와 같은 일들이 있었습니다.`
        
        return {
          ok: true,
          content: content
        }
      }
}
