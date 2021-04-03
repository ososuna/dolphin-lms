import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, NavController } from '@ionic/angular';
import { Contenido, Materia } from 'src/app/interfaces/interfaces';
import { ContenidoService } from '../../services/contenido.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  grados = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  materias: Observable<Materia[]>;

  temas: Contenido[];

  constructor( private navController: NavController,
               private contenidoService: ContenidoService ) { }

  ngOnInit() {
    this.segment.value = this.grados[0];
    this.materias = this.contenidoService.getMaterias();
    this.cargarContenido();
  }

  inicio() {
    this.navController.navigateRoot('/tabs', {animated: true});
  }

  contenido( tema: string ) {
    this.contenidoService.regresoInicio = 2;
    for (const i of this.temas) {
      if (i.titulo === tema) {
        this.contenidoService.tema = i;
      }
    }
    this.navController.navigateRoot('/tema', {animated: true});
  }

  cargarContenido() {
    this.contenidoService.getContenido().subscribe( resp => {
      this.temas = resp;
    });
  }
}
