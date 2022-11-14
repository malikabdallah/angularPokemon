import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  message: string = 'Vous êtes déconnecté. (pikachu/pikachu)';
  name: string;
  password: string;
  authService:AuthService;

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.authService=this.auth;
  }
 

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
      this.message = this.authService.isLogger() ?
          'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
      this.message = 'Tentative de connexion en cours ...';
      this.authService.login(this.name, this.password).subscribe(() => {
          this.setMessage();
          if (this.authService.isLogger()) {
              // Récupère l'URL de redirection depuis le service d'authentification
              // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
              let redirect = this.authService.redirect ? this.authService.redirect : '/pokemon/all';
              // Redirige l'utilisateur
              this.router.navigate(["pokemons"]);
          } else {
              this.password = '';
          }
      });
  }

  // Déconnecte l'utilisateur
  logout() {
      this.authService.logout();
      this.setMessage();
  }
}
