import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    public enemies: SimpleFighter[] | Fighter[],
  ) {
    super(player);
  }

  private _singleBattle(enemy: SimpleFighter | Fighter) {
    while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
      this.player.attack(enemy);
      enemy.attack(this.player);
    }
  }

  private _fightsInBattle() {
    for (let i = 0; i < this.enemies.length; i += 1) {
      this._singleBattle(this.enemies[i]);
    }
  }

  fight(): number {
    this._fightsInBattle();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}