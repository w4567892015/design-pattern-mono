import Battle from './libs/battle';
import Hero from "./libs/hero";

import General from "./libs/skill/libs/general";
import Colliding from "./libs/skill/libs/colliding";
import Waterball from "./libs/skill/libs/waterball";

const hero1 = new Hero('A', [new Colliding(), new General(), new Waterball()]);
const hero2 = new Hero('B', [new Waterball(), new General(), new Colliding()]);
const battle = new Battle(hero1, hero2);

battle.start();
