import { Injectable } from '@angular/core';
import { Opcion } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getMenuOptions() {
    return this.http.get<Opcion[]>('/assets/data/menu-options.json');
  }
}
