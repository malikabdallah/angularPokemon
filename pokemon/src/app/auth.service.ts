import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean=false;
  redirect:string;

  public isLogger():boolean{
    return this.isLoggedIn;
  }

  login(name:string,password:string):Observable<boolean>{
    const islogger=(name == 'pikachu' && password=='pikachu');
    return of(this.isLoggedIn).pipe(
      delay(1000)
    ).pipe(
      tap(isLoggedIn=>this.isLoggedIn=islogger)
    );

  }

  logout(){
    this.isLoggedIn=false;
  }

  constructor() { }
}
