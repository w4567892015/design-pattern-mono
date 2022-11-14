export interface Product {
  describe(): void;
}

export class FrenchFries implements Product {
  private state: string;

  constructor(state?: string){
    this.state = state || '有鹽巴';
  }

  describe(): void {
    console.log('我是%s薯條', this.state);
  }
}
