import { Injectable } from '@angular/core';
import { Contenido, Grado, Materia } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  tema: Contenido;

  regresoInicio: number;

  constructor( private http: HttpClient ) { }

  getContenido() {
    return this.http.get<Contenido[]>('/assets/data/contenido.json');
  }

  getGrados( ) {
    return this.http.get<Grado[]>(`/assets/data/grados.json`);
  }

  getMaterias( ) {
    return this.http.get<Materia[]>(`/assets/data/materias.json`);
  }

}
