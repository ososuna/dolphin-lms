import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contenido } from 'src/app/interfaces/interfaces';
import { ContenidoService } from '../../services/contenido.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  contenidos: Observable<Contenido[]>;

  constructor( private contenidoService: ContenidoService,
               private navController: NavController ) { }

  ngOnInit() {
    this.contenidos = this.contenidoService.getContenido();
  }

  tema( contenido: Contenido ) {
    this.contenidoService.regresoInicio = 3;
    this.navController.navigateRoot('/tema', { animated: true });
    this.contenidoService.tema = contenido;
  }

  inicio() {
    this.navController.navigateRoot('/tabs', { animated: true });
  }

}
