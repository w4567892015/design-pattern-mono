import Skill from "../";
import Hero from "../../hero";

class Waterball implements Skill {
  private skill_name: string;
  private weight: number;

  constructor() {
    this.skill_name = '水球';
    this.weight = 50;
  }

  public attack(attackingHero: Hero, attackedHero: Hero): number {
    attackingHero.lostMp(5);
    const injury = attackingHero.getWisdom() * 2;
    attackedHero.lostHp(injury);
    return injury;
  }

  public setProbability(probability: number): void{ this.weight = probability; };
  public getProbability(): number{ return this.weight };

  public toString(): string {
    return this.skill_name;
  }
}

export default Waterball;
