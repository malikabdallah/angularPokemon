import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PokemonTypePipe } from './pokemon-type.pipe';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonsRoutes: Routes = [
  {path:'edit/pokemon/:id',component:EditPokemonComponent},
  {path:'pokemons',component:ListPokemonComponent},
  {path:'pokemon/:id',component:DetailPokemonComponent},

];


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypePipe,
    BorderCardDirective,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonsRoutes)
  ]
})
export class PokemonModule { }
