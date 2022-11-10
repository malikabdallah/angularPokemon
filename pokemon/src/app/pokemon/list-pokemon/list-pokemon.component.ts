import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  pokemons :Pokemon[];

  goToDetail(pokemon:Pokemon){
    this.router.navigate(['pokemon',pokemon.id]);
  }

  constructor(private router:Router,
    private service:PokemonService) { }

  ngOnInit(): void {
    this.service.getPokemonList().subscribe(
      res=>{
        this.pokemons=res;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
