import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  constructor( private navController: NavController ) { }

  grados = [
    { val: '1er Grado', isChecked: false },
    { val: '2do Grado', isChecked: false },
    { val: '3er Grado', isChecked: false },
    { val: '4to Grado', isChecked: false },
    { val: '5to Grado', isChecked: false },
    { val: '6to Grado', isChecked: false }
  ];

  @ViewChild('crearCuentaSlide', {static: true}) slides: IonSlides;

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  siguienteSlide() {
    this.slides.lockSwipes( false );
    this.slides.slideNext();
    this.slides.lockSwipes( true );
  }

  inicio(){
    this.navController.navigateRoot( '/tabs', { animated: true } );
  }

}
