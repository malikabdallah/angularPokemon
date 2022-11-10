import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  getPokemonList():Pokemon[]{
    return POKEMONS;
  }
  getPokemonById(id:number):Pokemon |undefined{
    return POKEMONS.find(pokemon=>pokemon.id == id);
  }
  getPokemonTypesList():string[]{
   
   return [
    'Plante',
    'Eau',
    'Feu',
    'Fée',
    'Vol',
    'Combat',
    'Normal',
    'Psy',
    'Poison',
    'Insecte',
    'Electrik']
  }
}
