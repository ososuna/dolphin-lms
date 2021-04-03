import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Contenido } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  contenidos: Observable<Contenido[]>;

  constructor( private contenidoService: ContenidoService,
               private navController: NavController ) {}

  ngOnInit() {
    this.contenidos = this.contenidoService.getContenido();
  }

  tema( contenido: Contenido ) {
    this.contenidoService.regresoInicio = 1;
    this.navController.navigateRoot('/tema', { animated: true });
    this.contenidoService.tema = contenido;
  }

}
