import Hero from "./hero";

class Battle {
  private round: number;
  private heroes: Array<Hero> = [];

  constructor(hero1: Hero, hero2: Hero, round?: number) {
    this.round = round || 1;
    this.heroes[0] = hero1;
    this.heroes[1] = hero2;
  }

  public start(): void {
    for (let index = 0; index < this.round; index++) {
      console.log('Round %d', (index + 1));
      let turn = 1;
      while(!this.isGameOver()) {
        turn = (turn === 0) ? 1 : 0;
        this.processHeroTurn(turn);
      }
      console.log('Winner is %s', this.heroes[turn].getName());
      this.resetAllHero();
      console.log('=====');
    }
  }

  private resetAllHero(): void {
    this.heroes.map(item => item.reset());
  }

  private isGameOver(): Boolean {
    return !this.heroes[0].isAlive() || !this.heroes[1].isAlive();
  }

  private processHeroTurn(heroIndex: number): void {
    const attackingHero = this.heroes[heroIndex];
    const attackedHero = this.heroes[(heroIndex === 0) ? 1 : 0];
    console.log("Turn %s attack", attackingHero.getName());
    attackingHero.attack(attackedHero);
  }
}

export default Battle;
