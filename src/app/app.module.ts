import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';

import { FormsModule } from '@angular/forms';
import { ArticoloFormComponent } from './articolo-form/articolo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    ArticoloFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
