export const PJSD = {};
PJSD.Item = {};
/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
PJSD.abilities = {
  str: 'PJSD.Ability.Str.long',
  con: 'PJSD.Ability.Con.long',
  dex: 'PJSD.Ability.Dex.long',
  awa: 'PJSD.Ability.Awa.long',
  exp: 'PJSD.Ability.Exp.long',
  foc: 'PJSD.Ability.Foc.long',
  rea: 'PJSD.Ability.Rea.long',
};

PJSD.abilityAbbreviations = {
  str: 'PJSD.Ability.Str.abbr',
  con: 'PJSD.Ability.Con.abbr',
  dex: 'PJSD.Ability.Dex.abbr',
  awa: 'PJSD.Ability.Awa.abbr',
  exp: 'PJSD.Ability.Exp.abbr',
  foc: 'PJSD.Ability.Foc.abbr',
  rea: 'PJSD.Ability.Rea.abbr',
};
PJSD.attributes = {
  mass: 'PJSD.Attribute.Mass.long',
  height: 'PJSD.Attribute.Height.long',
  weight: 'PJSD.Attribute.Weight.long',
  structure_points: 'PJSD.Attribute.StructurePoints.long',
  blood_points: 'PJSD.Attribute.BloodPoints.long',
};

PJSD.attributeAbbreviations = {
  mass: 'PJSD.Attribute.Mass.abbr',
  height: 'PJSD.Attribute.Height.abbr',
  weight: 'PJSD.Attribute.Weight.abbr',
  structure_points: 'PJSD.Attribute.StructurePoints.abbr',
  blood_points: 'PJSD.Attribute.BloodPoints.abbr',
};
// Initialize the armor type object
PJSD.Item.armor = {};
PJSD.Item.armor.armortype = {
  cloth: 'Cloth',
  padded: 'Padded',
  leather: 'Leather',
  chain: 'Chain',
  plate: 'Plate',
  resistweave: 'Resist Weave',
  nijI: 'NIJ I',
  iiA: 'II-A',
  ii: 'II',
  iiiA: 'III-A',
  iii: 'III',
  iv: 'IV'
};

