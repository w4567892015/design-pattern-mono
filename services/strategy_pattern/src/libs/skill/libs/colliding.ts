import Skill from "../";
import Hero from "../../hero";

class Colliding implements Skill {
  private skill_name: string;
  private weight: number;

  constructor() {
    this.skill_name = '衝撞';
    this.weight = 50;
  }

  public attack(attackingHero: Hero, attackedHero: Hero): number {
    const injury = attackingHero.getStrength() * 2 - attackedHero.getDefense();
    attackedHero.lostHp(injury);
    return injury;
  }

  public setProbability(probability: number): void{ this.weight = probability; };
  public getProbability(): number{ return this.weight };

  public toString(): string {
    return this.skill_name;
  }
}

export default Colliding;
