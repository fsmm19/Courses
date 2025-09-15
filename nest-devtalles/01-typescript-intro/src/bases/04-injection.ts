import type {
  Move,
  PokeAPIResponse,
} from '../interfaces/pokeapi-interface.interface';
import {
  PokeApiFetchAdapter,
  PokeApiAxiosAdapter,
  type HttpAdapter,
} from '../api/pokeApi.adapter';

export class Pokemon {
  public readonly id: number;
  public name: string;
  private readonly http: HttpAdapter;

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(id: number, name: string, pokeApi: HttpAdapter) {
    this.id = id;
    this.name = name;
    this.http = pokeApi;
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeAPIResponse>(
      'https://pokeapi.co/api/v2/pokemon/4'
    );

    console.log(data.moves);

    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch);

charmander.getMoves();
