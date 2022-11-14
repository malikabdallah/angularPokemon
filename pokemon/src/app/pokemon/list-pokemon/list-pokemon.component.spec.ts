import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { BorderCardDirective } from '../border-card.directive';
import { POKEMONS } from '../mock-pokemons';
import { PokemonTypePipe } from '../pokemon-type.pipe';
import { PokemonService } from '../pokemon.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

import { ListPokemonComponent } from './list-pokemon.component';

fdescribe('ListPokemonComponent', () => {

  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;
  let myComponentHTML:HTMLElement;
  let myComponentDebugElement:DebugElement;
  let listePokemon:DebugElement[];
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  const mockPokemonService=
 {
  getPokemonList:
    jasmine.createSpy('getPokemonList').and.returnValue(of(POKEMONS))
};
 

beforeEach(async() => {
  // mockPokemonService = jasmine.createSpyObj('PokemonService', ['getPokemonList']);

   fixture = TestBed.configureTestingModule({
     declarations: [ BorderCardDirective,SearchPokemonComponent, ListPokemonComponent ,PokemonTypePipe],
     providers:[{ provide: Router, useValue: mockRouter },{provide:PokemonService,useValue:mockPokemonService}]
   })
   .createComponent(ListPokemonComponent);
 
   fixture.detectChanges(); // initial binding
   component=fixture.componentInstance;
 
   // all elements with an attached HighlightDirective
   listePokemon = fixture.debugElement.queryAll(By.directive(BorderCardDirective));
 
 });

 it("test chargement list ",()=>{
    expect(component.pokemons.length).toBe(12);
 })





 it("test click",async ()=>{
  await fixture.whenStable()

  const div = listePokemon[2].nativeElement as HTMLInputElement;
 
  // Dispatch a DOM event so that Angular responds to the input value change.
  div.dispatchEvent(new Event('click'));
  fixture.detectChanges();


  expect(mockRouter.navigate).toHaveBeenCalledWith(['pokemon',POKEMONS[2].id]);



 });

 it('test router',()=>{

  component.goToDetail(POKEMONS[0]);
  expect(mockRouter.navigate).toHaveBeenCalledWith(['pokemon',POKEMONS[0].id]);


 })

  it('should create', () => {
    expect(component).toBeTruthy();
  });



   
});
