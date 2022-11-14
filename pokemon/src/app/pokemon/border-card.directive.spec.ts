import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { BorderCardDirective } from './border-card.directive';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { POKEMONS } from './mock-pokemons';
import { PokemonTypePipe } from './pokemon-type.pipe';
import { PokemonService } from './pokemon.service';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

fdescribe('BorderCardDirective', () => {

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

  beforeEach(() => {
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

  it('should be instanciate',()=>{
    fixture.detectChanges();
    expect(component).toBeTruthy();
  })
  
  // color test
  it('should have 12 element', async() => {
    
    expect(listePokemon.length).toBe(12);
  });


  it('test bordure qd mouseenter',async()=>{

    await fixture.whenStable()
    
    // easier to work with nativeElement
      const div = listePokemon[2].nativeElement as HTMLInputElement;
      expect(div.style.borderColor)
        .withContext('initial color')
        .toBe('rgb(245, 245, 245)');
        
      // Dispatch a DOM event so that Angular responds to the input value change.
      div.dispatchEvent(new Event('mouseenter'));

      fixture.detectChanges();
      console.log("div 2="+JSON.stringify(div.style));
      expect(div.style.borderColor)
        .withContext('changed color')
        .toBe('red');
        div.dispatchEvent(new Event('mouseleave'));

        fixture.detectChanges();
        expect(div.style.borderColor)
        .withContext('initial color')
        .toBe('rgb(245, 245, 245)');
  });
 
});
