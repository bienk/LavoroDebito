import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder,  FormGroup, Validators } from '@angular/forms';
import {utente} from '../utente';
@Component({
  selector: 'app-form-registrazione',
  templateUrl: './form-registrazione.component.html',
  styleUrls: ['./form-registrazione.component.css']
})
export class FormRegistrazioneComponent implements OnInit {
  @Output ()   user   = new EventEmitter <utente> ();myForm: any;
;
    
input: utente;
  formRegistrazione : FormGroup;
     
  constructor(fb: FormBuilder) { 
      this.formRegistrazione= fb.group({
         username: ["", Validators.required] ,
         password: ["", Validators.required]
    });
}
  ngOnInit() {
     if(!this.formRegistrazione.invalid){

      this.input = new utente();

          this.input.username = this.formRegistrazione.controls['usename'].value;
        
          this.input.password = this.formRegistrazione.controls['password'].value;
          
    
  }
  }

 addUser(input){
   
    this.user.emit(this.input)
  }
  


}
