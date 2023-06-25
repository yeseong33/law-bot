export class MakeWordInput {
    
    htmlString: string;
    
    filePath: string;

}

export class MakeWordOutput {
  error?: string;
  ok: boolean;
  content: string;
}
