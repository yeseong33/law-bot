export class MakeContentInput {
    
    contents: string;
    
    eventPlace: string;

}

export class MakeContentOutput {
  error?: string;
  ok: boolean;
  content?: string;

}
