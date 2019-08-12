import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registrazione',
  templateUrl: './form-registrazione.component.html',
  styleUrls: ['./form-registrazione.component.css']
})
export class FormRegistrazioneComponent implements OnInit {
  
  
  formRegistrazione : FormGroup;
     username = "username";
     password = "password";
  constructor(fb: FormBuilder) { 
      this.formRegistrazione= fb.group({
         username: ["", Validators.required] ,
         password: ["", Validators.required]
    });
}
  ngOnInit() {
  }


}
