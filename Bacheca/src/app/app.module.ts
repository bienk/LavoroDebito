import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormRegistrazioneComponent } from './form-registrazione/form-registrazione.component';
import { FormVisuaComponent } from './form-visua/form-visua.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistrazioneComponent,
    FormVisuaComponent
  ],
  imports: [
    BrowserModule, FormsModule,  //Anche qui
   ReactiveFormsModule, NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
