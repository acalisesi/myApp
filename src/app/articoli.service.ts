import { Injectable } from '@angular/core';
import { Articolo } from './articolo/articolo';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {
  private elencoArticoli: Articolo[];
  constructor(private http: HttpClient) {
    this.elencoArticoli = [{
      titolo: "Creare componenti Angular 2",
      autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    },
    {
      titolo: "Creare servizi Angular 2",
      autore: "Roberto Bianchi",
      testo: "Anche creare servizi con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    }];
   }
   getArticoli(): Articolo[] {
    return this.elencoArticoli;
   }
   getArticoliFromApi() {
    return this.http.get("/api/articoli")
    //todo: using subscribe method for subscriber    
   }

   addArticolo(articolo: Articolo) {
    this.elencoArticoli.push (articolo);
   }
}
