import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) {

   }
  getPokemonList():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((response)=>{
        console.log("response =>"+response);
      }),
      catchError((error)=>{
        console.log("error "+error);
        return of([]);
      })
    );
    //return POKEMONS;
  }
  getPokemonById(id:number):Observable<Pokemon |undefined>{
    /*
    return POKEMONS.find(pokemon=>pokemon.id == id);
    */
   return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
    tap((pokemon)=>this.log(pokemon)),
    catchError((error)=>  this.handleError(error,undefined))
   );
  }


  log(response:any){
    console.table(response);
  }

  handleError(error:Error,errorValue:any){
    console.log("error "+error);
    return of(errorValue);
  }

  updatePokemon(pokemon:Pokemon):Observable<null>{
    const httpOption={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.put<Pokemon>('api/pokemons',pokemon,httpOption).pipe(
      tap((response)=>{
    
      }),
      catchError(error=>this.handleError(error,null))
    )
  }


  deletePokemon(id:number):Observable<null>{
    return this.http.delete<null>(`api/pokemons/${id}`).pipe(
      tap((pokemon)=>this.log(pokemon)),
      catchError((error)=>  this.handleError(error,null))
     );
  }

  addPokemon(pokemon:Pokemon):Observable<Pokemon>{
    const httpOption={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOption).pipe(
      tap((response)=>{
    
      }),
      catchError(error=>this.handleError(error,null))
    )
  }

  searchPokemonList(terme:string):Observable<Pokemon[]>{
    if(terme.length<=1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${terme}`).pipe(
      tap((response)=>{
        console.log("response "+response);
      }),
      catchError(error=>this.handleError(error,[]))
    )
    
  }

  getPokemonTypesList():string[]{
   
   return [
    'Plante',
    'Eau',
    'Feu',
    'Fée',
    'Vol',
    'Combat',
    'Normal',
    'Psy',
    'Poison',
    'Insecte',
    'Electrik']
  }
}
