export const pokemonIds = [1, 20, 30, 34, 66];
// export const pokemon = {
//   id: 1,
//   name: 'Bulbasaur',
//   age: 23,
// };

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  //   age: 23,
};

export const charmander: Pokemon = {
  id: 4,
  name: 'Charmander',
  age: 15,
};
export const pokemons: Pokemon[] = [];

// pokemons.push(1, 'string', bulbasaur);
pokemons.push(bulbasaur, charmander);

console.log(pokemons);
