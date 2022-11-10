import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemon:Pokemon|undefined;

  constructor(private router:ActivatedRoute,private route:Router,
    private service:PokemonService) { }

  ngOnInit(): void {
    let id=this.router.snapshot.params['id'];

    if(id){
      this.service.getPokemonById((Number(id))).subscribe(
        pokemon=>{
          this.pokemon=pokemon
        }
      );

    }
  }

  deletePokemon(pokemon:Pokemon){
    this.service.deletePokemon(pokemon.id).subscribe(
      res=>{
        this.goBack();
      }
    )
  }

  goBack(){
    this.route.navigate(['pokemons']);
  }

  goToEdit(){
    this.route.navigate(['edit/pokemon',this.pokemon?.id]);
  }
}
