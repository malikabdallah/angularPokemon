import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let myComponentHTML:HTMLElement;
  let myComponentDebugElement:DebugElement;
  
  beforeEach(async () => {
    /*TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    */
   TestBed.configureTestingModule({
      declarations:[AppComponent]
    }).compileComponents();
    fixture=TestBed.createComponent(AppComponent);
    component=fixture.componentInstance;
    myComponentDebugElement=fixture.debugElement;
    myComponentHTML=myComponentDebugElement.nativeElement;


  });

  it('should create the app', () => {
  //  const fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('propriete pokedex',()=>{
    expect(component.title).toEqual('pokedex');
  });


  it('affiche pokedex navbar',()=>{
    fixture.detectChanges();
    expect(myComponentHTML.querySelector(".brand-logo")?.textContent).toContain(component.title);
  });

  it('affiche pokedex bis',()=>{
    let contentdivdebugElement=myComponentDebugElement.query(By.css(".brand-logo"));
    fixture.detectChanges();
    expect(contentdivdebugElement.nativeElement.textContent).toContain(component.title);
  })

/*
  it(`should have as title 'pokemon'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toEqual('pokemon');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pokemon app is running!');
  });
  */
});
