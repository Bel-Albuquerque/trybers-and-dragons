import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    public enemies: SimpleFighter[] | Fighter[],
  ) {
    super(player);
  }

  private _fightsInBattle() {
    for (let i = 0; i < this.enemies.length; i += 1) {
      this.player.attack(this.enemies[i]);
      this.enemies[i].attack(this.player);
    }
  }

  fight(): number {
    this._fightsInBattle();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}