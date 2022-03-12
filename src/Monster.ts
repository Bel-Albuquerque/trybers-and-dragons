import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  private _lostLifePoints(damage: number) {
    this._lifePoints -= damage;
  }

  private _conditionForLostLifePoints(damage: number) {
    if ((this.lifePoints - damage) > 0) return this._lostLifePoints(damage);
    this._lifePoints = -1;
  }

  receiveDamage(attackPoints: number) {
    this._conditionForLostLifePoints(attackPoints);
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}
