import { getLimit, getSelectKey, calcSection } from './selectors';

const calcDetails = (statsKey, item, sameEle = false) => {
  let HP, STR, might;
  HP = STR = might = 0;
  if (item) {
    let { level, mana, rarity, curRarity } = item;
    const temp = statsKey === 'adventurer' ? '5' : rarity;
    const MAX_LEVEL = getLimit(statsKey, temp);

    // parse to number
    level *= 1;
    if (level === MAX_LEVEL) {
      HP = item.MaxHp;
      STR = item.MaxAtk;
    } else {
      let base_HP, base_STR, stepHP, stepSTR;
      if (statsKey === 'adventurer') {
        base_HP = item['MinHp' + curRarity];
        base_STR = item['MinAtk' + curRarity];
        stepHP = 'MinHp5';
        stepSTR = 'MinAtk5';
      } else {
        base_HP = item.MinHp;
        base_STR = item.MinAtk;
        stepHP = 'MinHp';
        stepSTR = 'MinAtk';
      }

      if (level === 1) {
        HP = base_HP;
        STR = base_STR;
      } else {
        HP =
          base_HP +
          ((level - 1) / (MAX_LEVEL - 1)) * (item.MaxHp - item[stepHP]);
        STR =
          base_STR +
          ((level - 1) / (MAX_LEVEL - 1)) * (item.MaxAtk - item[stepSTR]);
      }
    }

    if (statsKey === 'adventurer') {
      HP += getMCBonus(item, 'Hp', mana);
      STR += getMCBonus(item, 'Atk', mana);
    }

    HP = Math.ceil(HP);
    STR = Math.ceil(STR);

    if (sameEle) {
      // adventurer equipt same element weapon || dragon has 1.5 bonus
      HP = Math.ceil(HP * 1.5);
      STR = Math.ceil(STR * 1.5);
    }

    might = HP + STR + getMight(statsKey, item);
  }

  return {
    HP,
    STR,
    might,
  };
};

const getMCBonus = (adventurer, key, mana) => {
  const strMana = mana.toString() || '0';
  const index = ['50', '45', '40', '30', '20', '10', '0'].indexOf(strMana);
  const statArray = [
    adventurer['McFullBonus' + key + '5'],
    adventurer['Plus' + key + '4'],
    adventurer['Plus' + key + '3'],
    adventurer['Plus' + key + '2'],
    adventurer['Plus' + key + '1'],
    adventurer['Plus' + key + '0'],
    0,
  ];

  return statArray.slice(index).reduce((acc, cur) => acc + cur, 0);
};

const getMight = (statsKey, item) => {
  switch (statsKey) {
    case 'adventurer':
      return getAdventurerMight(item);
    case 'weapon':
      return getWeaponMight(item);
    case 'wyrmprint1':
    case 'wyrmprint2':
      return getWyrmprintMight(item);
    case 'dragon':
      return getDragonMight(item);
    default:
      return 0;
  }
};

const getAdventurerMight = adventurer => {
  const skillMightSet = {
    '50': 500, //300+200,
    '45': 500, //300+200,
    '40': 400, //200+200,
    '30': 300, //200+100,
    '20': 200, //100+100,
    '10': 100,
    '0': 100,
  };

  const rarity5Set = {
    '50': ['Abilities12', 'Abilities22', 'Abilities32'],
    '45': ['Abilities12', 'Abilities22', 'Abilities32'],
    '40': ['Abilities12', 'Abilities22', 'Abilities31'],
    '30': ['Abilities12', 'Abilities21', 'Abilities31'],
    '20': ['Abilities11', 'Abilities21', 'Abilities31'],
    '10': ['Abilities11', 'Abilities21'],
    '0': [],
  };

  const rarity34Set = {
    '50': ['Abilities12', 'Abilities22', 'Abilities31'],
    '45': ['Abilities12', 'Abilities22', 'Abilities31'],
    '40': ['Abilities12', 'Abilities22'],
    '30': ['Abilities12', 'Abilities21'],
    '20': ['Abilities11', 'Abilities21'],
    '10': ['Abilities11', 'Abilities21'],
    '0': [],
  };
  const { mana, ex } = adventurer;
  const strMana = mana.toString() || '0';
  const intMana = mana * 1;
  const intEX = ex * 1;

  // Euden: 100001_01_r0
  const abilitySet =
    adventurer.rarity === '5' || adventurer.id === '100001_01_r0'
      ? rarity5Set[strMana]
      : rarity34Set[strMana];

  const skillMight = skillMightSet[strMana];
  const abilityMight = abilitySet.reduce((acc, k) => {
    if (adventurer[k]) {
      return acc + adventurer[k];
    }

    return acc;
  }, 0);
  const fsMight = intMana >= 40 ? 120 : intMana >= 10 ? 60 : 0;
  const exMight = adventurer['EX' + intEX];

  return skillMight + abilityMight + fsMight + exMight;
};

const getWeaponMight = weapon => {
  //LV1 skill 50, LV2 skill 100
  return (
    weapon.Abilities11 +
    weapon.Abilities21 +
    (weapon.unbind * 1 === 4 ? 100 : 50)
  );
};

const getWyrmprintMight = wyrmprint => {
  if (wyrmprint.unbind * 1 === 4) {
    return (
      wyrmprint.Abilities12 + wyrmprint.Abilities22 + wyrmprint.Abilities32
    );
  }

  return wyrmprint.Abilities11 + wyrmprint.Abilities21 + wyrmprint.Abilities31;
};

const getDragonMight = dragon => {
  const bondBonus = dragon.bond * 10;
  if (dragon.unbind * 1 === 4) {
    // LV2 skill might: 100
    return dragon.Abilities12 + dragon.Abilities22 + bondBonus + 100;
  }
  // LV1 skill might: 50
  return dragon.Abilities11 + dragon.Abilities21 + bondBonus + 50;
};

export const getDetails = (stats, halidom) => {
  const details = {};
  const keys = getSelectKey(stats);
  const element = calcSection(halidom.element[keys.element]);
  const weapon = calcSection(halidom.weapon[keys.weapon]);
  const fafnir = calcSection(halidom.dragon[keys.dragon]);
  const { adventurer, dragon } = stats;

  let HP, STR, might, totalHP, totalSTR, totalMight;
  HP = STR = might = totalHP = totalSTR = totalMight = 0;
  Object.keys(stats).forEach(statsKey => {
    const sameEle =
      (statsKey === 'weapon' || statsKey === 'dragon') &&
      adventurer &&
      stats[statsKey] &&
      adventurer.element === stats[statsKey].element;

    const value = calcDetails(statsKey, stats[statsKey], sameEle);
    totalHP += value.HP;
    totalSTR += value.STR;
    totalMight += value.might;
    details[statsKey] = value;
  });

  HP =
    Math.ceil(details.adventurer.HP * (element.HP + weapon.HP) * 0.01) +
    Math.ceil(details.dragon.HP * fafnir.HP * 0.01);
  STR =
    Math.ceil(details.adventurer.STR * (element.STR + weapon.STR) * 0.01) +
    Math.ceil(details.dragon.STR * fafnir.STR * 0.01);
  might = HP + STR;
  totalHP += HP;
  totalSTR += STR;
  totalMight += might;
  details.halidom = { HP, STR, might };
  details.ability = { HP: 0, STR: 0, might: 0 };
  if (adventurer && dragon && adventurer.element === dragon.element) {
    const ability = dragon.unbind * 1 === 4 ? 'ability2' : 'ability1';
    HP = Math.ceil(totalHP * dragon[ability].HP * 0.01);
    STR = Math.ceil(totalSTR * dragon[ability].STR * 0.01);
    totalHP += HP;
    totalSTR += STR;
    details.ability = { HP, STR, might: 0 };
  }

  details.total = { HP: totalHP, STR: totalSTR, might: totalMight };

  return details;
};
