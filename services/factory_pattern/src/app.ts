import { FrenchFriesFactory } from './services/factory';

const friesFac = new FrenchFriesFactory();

const fries = friesFac.getProduct();
const myfries = friesFac.getProduct('無鹽的');

fries.describe();
myfries.describe();
