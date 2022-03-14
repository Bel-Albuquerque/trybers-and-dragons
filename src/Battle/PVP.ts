import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(public player: Fighter, public player2: Fighter) {
    super(player);
  }

  private _battles() {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player2.attack(this.player);
      this.player.attack(this.player2);
    }
  }

  fight(): number {
    this._battles();

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}