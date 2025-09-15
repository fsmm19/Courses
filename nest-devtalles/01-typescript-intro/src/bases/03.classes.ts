import axios from 'axios';

import type {
  PokeAPIResponse,
  Move,
} from '../interfaces/pokeapi-interface.interface';

export class Pokemon {
  public readonly id: number;
  public name: string;
  // public imageUrl: string;

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;

    console.log('Llamada al constructor');
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10;
    const { data } = await axios.get<PokeAPIResponse>(
      'https://pokeapi.co/api/v2/pokemon/4'
    );

    console.log(data.moves);

    return data.moves;
  }
}

export const charmander = new Pokemon(4, 'Charmander');

// charmander.id = 10; -> Error

console.log(charmander);

// charmander.scream();
// charmander.speak();

charmander.getMoves();
