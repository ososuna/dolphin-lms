import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, NavController } from '@ionic/angular';
import { ContenidoService } from '../../services/contenido.service';
import { Grado } from '../../interfaces/interfaces';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.page.html',
  styleUrls: ['./temario.page.scss'],
})
export class TemarioPage implements OnInit {

  grados = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];

  fechas = ['7 de diciembre', '4 de diciembre', '3 de diciembre', '2 de diciembre', '1 de diciembre', '30 de noviembre'];

  grado: Grado = {
    id: 1,
    titulo: 'Primero',
    temas: ['Sumas y Restas', 'Vocales', 'Ortografía']
  };

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  constructor( private navController: NavController,
               private contenidoService: ContenidoService ) { }

  ngOnInit() {
    this.segment.value = this.grados[0];
    this.cargarGrados(this.grados[0]);
  }

  cambioGrado( event ) {
    this.cargarGrados(event);
  }

  cargarGrados( grado: string ) {
    this.contenidoService.getGrados().subscribe( resp => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < resp.length; i++) {
        if (resp[i].titulo === grado) {
          this.grado = resp[i];
        }
      }
    });
  }

  inicio() {
    this.navController.navigateRoot('/tabs', { animated: true });
  }

}
