import { not } from '@angular/compiler/src/output/output_ast';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.service';
import { catchError, Observable, of, tap } from 'rxjs';

import { LoginComponent } from './login.component';
import { ListPokemonComponent } from '../pokemon/list-pokemon/list-pokemon.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let myComponentHTML:HTMLElement;
  let myComponentDebugElement:DebugElement;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let router: Router;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {

    mockAuthService = jasmine.createSpyObj<AuthService>('AuthService', ['login','logout','isLogger']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule , FormsModule,RouterTestingModule.withRoutes([
        { path: 'pokemons', component: ListPokemonComponent }
    ])],
      declarations: [ LoginComponent ],
      providers:[{provide:AuthService,useValue:mockAuthService}, { provide: Router, useValue: mockRouter }]
    })
    .compileComponents();

    fixture=TestBed.createComponent(LoginComponent);
    component=fixture.componentInstance;
    myComponentDebugElement=fixture.debugElement;
    myComponentHTML=myComponentDebugElement.nativeElement;
    fixture.detectChanges();
  });
  beforeEach(async() => {
 
   // await fixture.whenStable();

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verifier text',()=>{
    expect(component.message).toEqual('Vous êtes déconnecté. (pikachu/pikachu)');
  });

  it('verifier rendu text',()=>{
    expect(myComponentHTML.querySelector("#message")?.textContent).toContain(component.message);
  })

  it('verifier rendu bis',()=>{
    let contentPDebug=myComponentDebugElement.query(By.css("#message"));

    expect(contentPDebug.nativeElement.textContent).toContain(component.message);
  })

  it('verifier login echec',()=>{
    mockAuthService.login.and.returnValue(of(false));
    mockAuthService.isLogger.and.returnValue(false);
    component.name='abc';
    component.password='abc';
    component.login();
    //fixture.detectChanges();
    //expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(component.password.length).toBe(0);
  });

 

  it('verifier message qd connected',()=>{
    mockAuthService.isLogger.and.returnValue(true);
    component.setMessage();
    //fixture.detectChanges();
    //expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(component.message).toContain("Vous êtes connecté");
  });

  it('verifier loggin succes',()=>{

    mockAuthService.login.and.returnValue(of(true));
    mockAuthService.isLogger.and.returnValue(true);
    component.name='abc';
    component.password='abc';
    component.login();
    //expect(component.redirect).
    expect(mockRouter.navigate).toHaveBeenCalledWith(['pokemons']);


    
  });

  it('verifier logout',()=>{
    mockAuthService.isLogger.and.returnValue(false);
    
    component.logout();
    //fixture.detectChanges();
    //expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(component.message).toContain("Identifiant ou mot de passe incorrect.");
  });






  
  

 

  
});
