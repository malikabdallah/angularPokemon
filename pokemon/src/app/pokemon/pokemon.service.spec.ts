import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { POKEMONS } from './mock-pokemons';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  /*getPokemonList
  getPokemonById
  getPokemonTypesList
  updatePokemon
  deletePokemon
  addPokemon
  */
  

  let service: PokemonService;

  beforeEach(() => {
    let MockApiHandlerService = jasmine.createSpyObj('PokemonService', {

      getPokemonList: of(POKEMONS),
      getPokemonById: of(POKEMONS[1])
    });
    


    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
