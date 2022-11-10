import { Injectable } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemons';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService  implements InMemoryDbService  {

  createDb() {
    let pokemons:Pokemon[]=POKEMONS;
    return {pokemons};
  }
}
