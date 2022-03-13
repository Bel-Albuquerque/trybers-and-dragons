import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Legolas');
const player2 = new Character('Dooby');
const player3 = new Character('Galadriel');

for (let i = 0; i < 15; i += 1) player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

class BattleType extends Battle { }

const runBattles = (battlesArray: BattleType[]) => {
  for (let i = 0; i < battlesArray.length; i += 1) {
    battlesArray[i].fight();
  }
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
