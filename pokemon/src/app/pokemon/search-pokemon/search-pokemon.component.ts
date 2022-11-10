import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {
  //flux de données dans le temps avec les recherches de l utilisateur  a .. ab..a ..az
  searchTerms=new Subject<string>();

  pokemons:Observable<Pokemon[]>;

  constructor(private router:Router,private service:PokemonService) { }

  ngOnInit(): void {
    this.pokemons=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term=>this.service.searchPokemonList(term))

    );
  }

  search(terme:string){
    this.searchTerms.next(terme);
  }
  
  goToPokemonDetail(pokemon:Pokemon){
    const link=['/pokemon',pokemon.id];
    this.router.navigate(link);

    
  }

}
