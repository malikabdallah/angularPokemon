import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng changes "+this.pokemons);
  }
  
  pokemons :Pokemon[]=POKEMONS;
  pokemon:Pokemon=POKEMONS[0];
  selectedPokemon:Pokemon|undefined;

  ngOnInit(): void {
    
  }


  selectPokemon(pokemon:Pokemon){
    alert("vous avez cliquer sur "+pokemon.name);
  }



  selectPokemon2(pokemon:MouseEvent){
   const num= +(pokemon.target as HTMLInputElement).value;
   alert("vous avez cliquer sur "+this.pokemons[num].name);
  }

  selectPokemon3(num:string){
   
    
    this.selectedPokemon=this.pokemons[Number(num)];
  }
}
