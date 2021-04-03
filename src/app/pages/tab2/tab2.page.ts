import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import { Observable } from 'rxjs';
import { Publicacion } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  publicaciones: Observable<Publicacion[]>;

  constructor( private publicacionService: PublicacionService ) {}

  ngOnInit() {
    this.publicaciones = this.publicacionService.getPublicaciones();
  }

}
