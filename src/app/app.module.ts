import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';

import { FormsModule } from '@angular/forms';
import { ArticoloFormComponent } from './articolo-form/articolo-form.component';

import { HttpClientModule } from '@angular/common/http';
import { ArticoloListaComponent } from './articolo-lista/articolo-lista.component'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ArticoloListaComponent
      },
      {
        path: 'nuovoArticolo',
        component: ArticoloFormComponent
      }      
    ]),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ArticoloComponent,
    ArticoloFormComponent,
    ArticoloListaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
