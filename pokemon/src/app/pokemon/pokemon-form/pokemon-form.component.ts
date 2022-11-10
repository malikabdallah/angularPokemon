import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input()
  pokemon:Pokemon;


  types:string[]=[];

  constructor(private service:PokemonService,
    private router:Router) { }

  ngOnInit(): void {
    this.types=this.service.getPokemonTypesList();
    //LISTtype
  }

  isTypesValid(type:string):boolean{

    if(this.pokemon.types.length==1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length >2 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  hasType(type:string):boolean{
      return this.pokemon.types.includes(type);
    }

  selectType(event:Event,type:string){
    const ischecked=(<HTMLInputElement>event.target).checked;
    if(ischecked){
      this.pokemon.types.push(type);
    }else{
      const index=this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
    }

  } 

  onSubmit(){
    console.log("submit form");
    this.router.navigate(['pokemon',this.pokemon.id]);
  }

}
