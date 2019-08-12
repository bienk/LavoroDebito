import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormRegistrazioneComponent } from './form-registrazione/form-registrazione.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistrazioneComponent
  ],
  imports: [
    BrowserModule, FormsModule,  //Anche qui
   ReactiveFormsModule, NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
