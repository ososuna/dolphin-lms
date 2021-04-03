import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class PublicacionService {

  constructor( private http: HttpClient ) { }

  getPublicaciones() {
    return this.http.get<Publicacion[]>('/assets/data/publicaciones.json');
  }
}
