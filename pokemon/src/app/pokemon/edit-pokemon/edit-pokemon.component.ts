import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemon:Pokemon|undefined;

  constructor(private route:ActivatedRoute,private service:PokemonService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.pokemon=this.service.getPokemonById(Number(id));
  }

}
