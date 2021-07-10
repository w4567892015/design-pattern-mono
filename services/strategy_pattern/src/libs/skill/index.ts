import Hero from "../hero";

interface Skill {
  attack (attackingHero: Hero, attackedHero: Hero): number;
  setProbability(probability: number): void;
  getProbability(): number;
}

export default Skill;
