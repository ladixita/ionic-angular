import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // listas: Lista[] = [];

  constructor(
    public deseoService: DeseosService,
    private router: Router) {
    // this.listas = deseoService.listas;
  }

  agregarLista() {
    this.router.navigateByUrl('/tabs/tab1/agregar');
  }

}
