import { Product, FrenchFries } from './product';

interface Factory {
  getProduct(state?: string): Product;
}

export class FrenchFriesFactory implements Factory {
  getProduct(state?: string) {
    return new FrenchFries(state);
  }
}
