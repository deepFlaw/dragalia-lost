const ui = {
  ability: { en: 'Ability', ja: 'アビリティ', zh: '能力' },
  adventurer: { en: 'Adventurer', ja: 'キャラ', zh: '角色' },
  augments: { en: 'Augments', ja: 'プラス値', zh: '附加值' },
  augHp: { en: 'HP +', ja: 'HP +', zh: 'HP +' },
  augStr: { en: 'STR +', ja: 'STR +', zh: 'STR +' },
  bond: { en: 'Bond', ja: '信赖度', zh: '信赖度' },
  cancel: { en: 'Cancel', ja: '取消', zh: '取消' },
  curRarity: { en: 'Rarity', ja: 'レアリティ', zh: '稀有度' },
  def: { en: 'Def', ja: '防御', zh: '防御' },
  details: { en: 'Details', ja: '詳細', zh: '详情' },
  dragon: { en: 'Dragon', ja: 'ドラゴン', zh: '龙' },
  dcrStr: { en: 'Decrease Strength', ja: '攻撃力ダウンする', zh: '降低攻击' },
  element: { en: 'Element', ja: '属性', zh: '属性' },
  ex: { en: 'Co-Ability', ja: 'EXアビリティ', zh: 'EX' },
  exDef: { en: 'Co-Ability Def', ja: 'EX 防御', zh: 'EX 防御' },
  exHp: { en: 'Co-Ability HP', ja: 'EX HP', zh: 'EX HP' },
  facility: { en: 'Facility', ja: '施設', zh: '建筑' },
  halidom: { en: 'Halidom', ja: '聖城', zh: '圣城' },
  hp: { en: 'HP', ja: 'HP', zh: 'HP' },
  language: { en: 'Language', ja: '言語', zh: '语言' },
  level: { en: 'Level', ja: 'レベル', zh: '等级' },
  mana: { en: 'Mana Circle', ja: 'マナサークル', zh: '魔法圆环' },
  might: { en: 'Might', ja: '戦力', zh: '战力' },
  multiplier: { en: 'Multiplier', ja: '乗数', zh: '倍率' },
  name: { en: 'Name', ja: '名称', zh: '名称' },
  rarity: { en: 'Rarity', ja: 'レアリティ', zh: '稀有度' },
  reduce: { en: 'Reduce Damage', ja: '真竜耐性', zh: '减伤' },
  res: { en: 'Resistance', ja: '属性耐性', zh: '属性抗性' },
  reset: { en: 'Reset', ja: 'リセット', zh: '重置' },
  search: { en: 'Search', ja: '検索', zh: '搜索' },
  stats: { en: 'Stats', ja: '状態', zh: '属性' },
  str: { en: 'STR', ja: '攻撃力', zh: '攻击力' },
  total: { en: 'Total', ja: '合計', zh: '合计' },
  unbind: { en: 'Unbind', ja: '上限解放', zh: '上限解锁' },
  weapon: { en: 'Weapon', ja: '武器', zh: '武器' },
  wyrmprint: { en: 'Wyrmprint', ja: '竜輝の護符', zh: '龙辉护符' },
  wyrmprint1: { en: 'Wyrmprint1', ja: '竜輝の護符1', zh: '龙辉护符1' },
  wyrmprint2: { en: 'Wyrmprint2', ja: '竜輝の護符2', zh: '龙辉护符2' },
  // halidom
  altar: { en: 'Altar', ja: '祭壇', zh: '祭坛' },
  dojo: { en: 'Dojo', ja: '訓練場', zh: '训练场' },
  dracolith: { en: 'Dracolith', ja: '竜哭碑', zh: '龙哭碑' },
  dragontree: { en: 'Dragontree', ja: 'ドラゴンツリー', zh: '龙果树' },
  event: { en: 'Event', ja: 'イベント', zh: '活动' },
  fafnir: { en: 'Fafnir', ja: 'ファフ二ール像', zh: '法夫纳像' },
  rupies: { en: 'Rupies', ja: 'ルピ鉱山', zh: '金币矿山' },
  slime: { en: 'Slime', ja: 'スライム像', zh: '史莱姆像' },
  tree: { en: 'Tree', ja: '覚醒の樹', zh: '觉醒之树' },
  smithy: { en: 'Smithy', ja: '鍛冶屋', zh: '铁匠铺' },
  type: { en: 'Type', ja: '種類', zh: '类型' },
  // element
  Flame: { en: 'Flame', ja: '火', zh: '火' },
  Water: { en: 'Water', ja: '水', zh: '水' },
  Wind: { en: 'Wind', ja: '風', zh: '风' },
  Light: { en: 'Light', ja: '光', zh: '光' },
  Shadow: { en: 'Shadow', ja: '闇', zh: '暗' },
  // weapon
  Sword: { en: 'Sword', ja: '剣', zh: '剑' },
  Blade: { en: 'Blade', ja: '刀', zh: '刀' },
  Dagger: { en: 'Dagger', ja: '短剣', zh: '短剑' },
  Axe: { en: 'Axe', ja: '斧', zh: '斧' },
  Lance: { en: 'Lance', ja: '槍', zh: '枪' },
  Bow: { en: 'Bow', ja: '弓', zh: '弓' },
  Wand: { en: 'Wand', ja: 'ロッド', zh: '魔杖' },
  Staff: { en: 'Staff', ja: '杖', zh: '法杖' },
  // enemy
  dungeon: { en: 'Dungeon', ja: 'ダンジョン', zh: '副本' },
  hms: { en: 'High Midgardsormr', ja: '真ミドガルズオルム', zh: '真耶梦加得' },
  hbh: { en: 'High Brunhilda', ja: '真ブリュンヒルデ', zh: '真布伦希尔德' },
  hmc: { en: 'High Mercury', ja: '真マーキュリー', zh: '真墨丘利' },
  hjp: { en: 'High Jupiter', ja: '真ユピテル', zh: '真朱庇特' },
  hzd: { en: 'High Zodiark', ja: '真ゾディアーク', zh: '真佐迪亚克' },

  difficulty: { en: 'Difficulty', ja: '難易度', zh: '难度' },
  N: { en: 'Prelude', ja: '入門', zh: '入门' },
  H: { en: 'Standard', ja: '中級', zh: '中级' },
  VH: { en: 'Expert', ja: '上級', zh: '高级' },
  EX: { en: 'Master', ja: '超級', zh: '超级' },
};

export default ui;
