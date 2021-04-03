import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { NetworkService } from '../../services/network.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  textFooter = 'Crear Cuenta';

  isConnected = false;

  constructor( private navController: NavController,
               private networkService: NetworkService,
               private alertController: AlertController ) { }

  @ViewChild('loginSlide', {static: true}) slides: IonSlides;

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  crearCuenta() {
    this.textFooter = 'Iniciar Sesión';
    this.slides.lockSwipes( false );
    this.slides.slideTo( 1 );
    this.slides.lockSwipes( true );
  }

  iniciarSesion() {
    this.textFooter = 'Crear Cuenta';
    this.slides.lockSwipes( false );
    this.slides.slideTo( 0 );
    this.slides.lockSwipes( true );
  }

  siguienteSlide() {
    this.slides.lockSwipes( false );
    this.slides.slideNext();
    this.slides.lockSwipes( true );
  }

  cambiarSlide() {
    this.slides.getActiveIndex().then( (index) => {
      if (index === 0) {
        this.crearCuenta();
      } else {
        this.iniciarSesion();
      }
    });
  }

  crearCuentaPagina() {
    this.navController.navigateRoot( '/crear-cuenta', { animated: true } );
  }

  inicio(){
    this.networkService.getNetworkStatus().subscribe((connected: boolean) => {
      this.isConnected = connected;
      if (!this.isConnected) {
          this.presentAlert();
      } else {
        this.navController.navigateRoot( '/tabs', { animated: true } );
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'No estás conectado a Internet',
      message: 'Intenta conectarte a Internet e intenta de nuevo',
      buttons: ['OK'],
      animated: true,
      mode: 'ios',
    });

    await alert.present();
  }
}
