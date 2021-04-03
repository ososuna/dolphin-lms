import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Contenido } from 'src/app/interfaces/interfaces';
import { ContenidoService } from '../../services/contenido.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
})
export class TemaPage implements OnInit {

  tema: Contenido;

  constructor( private navController: NavController,
               private contenidoService: ContenidoService ) { }

  ngOnInit() {
    this.tema = this.contenidoService.tema;
  }

  inicio() {
    if (this.contenidoService.regresoInicio === 1) {
      this.navController.navigateRoot('/tabs', { animated: true });
    } else if (this.contenidoService.regresoInicio === 2) {
      this.navController.navigateRoot('/contenido', { animated: true });
    } else {
      this.navController.navigateRoot('/historial', { animated: true });
    }
  }
}
