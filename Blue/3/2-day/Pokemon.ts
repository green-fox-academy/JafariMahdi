
export class Pokemon {
  name: string;
  type: string;
  effectiveAgainst: string;

  constructor(name: string, type: string, effectiveAgainst: string) {
      this.name = name;
      this.type = type;
      this.effectiveAgainst = effectiveAgainst;
  }

  isEffectiveAgainst(pokemon: Pokemon): boolean {
      return this.effectiveAgainst === pokemon.type;
  }
}


//   1- dar parametr yek method mishavad be  kelas class niz eshare kard   