import { Pokemon } from './Pokemon'

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

let pokemonOfAsh :pokemon = initializePokemon();

pokemonOfAsh.forEach( value => {
  if(value.isEffectiveAgainst(wildPokemon)){
    console.log(`Ì choose you ${value.name}`);
    
  }
})
 

//   1- function ke khodash list az elementha ra darad va return mikonad
