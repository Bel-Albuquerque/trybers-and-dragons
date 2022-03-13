import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(public player: Fighter, public player2: Fighter) {
    super(player);
  }

  fight(): number {
    this.player.attack(this.player2);
    this.player2.attack(this.player);

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}