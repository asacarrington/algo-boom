export class AlgorithmModel {
    
    public input: string;
    public type: string;
    public time: string;
    
  constructor(input: string, type: string, time?: string) { 
      this.input = input;
      this.time = time;
      this.type = type;
   }
}