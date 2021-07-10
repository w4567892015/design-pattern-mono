import Skill from './skill';

class Hero {
  private name: string;
  private hp: number;
  private mp: number;
  private strength: number;
  private wisdom: number;
  private defenses: number;
  private skill: Array<Skill>;

  constructor(name: string, skill: Array<Skill>) {
    // init hero quality
    this.name = name; // 名稱
    this.hp = 1000; // 血量
    this.mp = 400; // 魔力
    this.strength = 300; // 力量
    this.wisdom = 160; // 智力
    this.defenses = 200; // 防禦
    this.skill = skill; // 技能
  }

  public attack(targetHero: Hero): void {
    const tmp = [];
    for (let i = 0; i < this.skill.length; i++) {
      const num = this.skill[i].getProbability();
      for (let j = 0; j < num; j++) {
        tmp.push(i);
      }
    }
    const randomNum = tmp[Math.floor(Math.random() * tmp.length)];
    const injury = this.skill[randomNum].attack(this, targetHero);
    console.log('%s 使用了 %s，傷害值為 %d', this.getName(), this.skill[randomNum], injury);
    console.log('%s 的 Hp 剩下 %d', targetHero.getName(), targetHero.getHp());
  }

  public reset(): void { this.hp = 1000; this.mp = 400; }

  public lostHp(hp: number): void { this.setHp(this.getHp() - hp) };
  public lostMp(mp: number): void {
    if(this.getMp() < mp) throw new Error("MpNotEnoughException");
    this.setMp(this.getMp() - mp);
  }

  public isAlive(): boolean { return this.getHp() > 0 }

  public setName(name: string): void { this.name = name }
  public getName(): string { return this.name }

  public setHp(hp: number): void{ this.hp = hp }
  public getHp(): number{ return (this.hp <= 0) ? 0 : this.hp }

  public setMp(mp: number): void{ this.mp = mp }
  public getMp(): number{ return this.mp }

  public setStrength(strength: number): void{ this.strength = strength }
  public getStrength(): number{ return this.strength }

  public setWisdom(wisdom: number): void{ this.wisdom = wisdom }
  public getWisdom(): number{ return this.wisdom }

  public setDefense(defenses: number): void{ this.defenses = defenses }
  public getDefense(): number{ return this.defenses }

  public setSkill(skill: Array<Skill>): void{ this.skill = skill }
}

export default Hero;
