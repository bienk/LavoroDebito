import { Component } from '@angular/core';
import {FormBuilder,  FormGroup, Validators } from '@angular/forms';
import {utente} from './utente';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bacheca';
  utenti : utente [];
b : utente;
a :boolean = false;
getUser(event){
  this.a = true;
  console.log(this.a);
 
  this.utenti.push(
   { username : event.username ,password : event.password}  );
}
}

function newFunction() {
    return this;
}

