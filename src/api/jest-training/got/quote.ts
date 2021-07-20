export interface Quote {
  sentence: string;
  character: Character;
}

export interface House {
  name: string;
  slug: string;
}

export interface Character {
  name: string;
  slug: string;
  house: House;
}
