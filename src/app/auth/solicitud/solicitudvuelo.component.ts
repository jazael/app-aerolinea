import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';

export interface Destino {
  name: string;
}

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitudvuelo.component.html',
  styleUrls: ['./solicitudvuelo.component.css']
})

export class SolicitudvueloComponent implements OnInit, OnDestroy {
  maxDate: Date;
  isLoading = false;

  optionsOrigen: Destino[] = [
    {name: 'Puerto Rico'},
    {name: 'Filipinas'},
    {name: 'Colombia'},
    {name: 'México'},
    {name: 'Venezuela'},
    {name: 'Costa Rica'},
    {name: 'Honduras'},
    {name: 'Perú'},
    {name: 'Panamá'},
    {name: 'Chile'},
    {name: 'Ecuador'}
  ];

  optionsDestino: Destino[] = [
    {name: 'Panama'},
    {name: 'Alemania'},
    {name: 'El Salvador'},
    {name: 'Estados Unidos'},
    {name: 'España'},
    {name: 'Croacia'},
    {name: 'Nicaragua'},
    {name: 'Rusia'},
    {name: 'Inglaterra'},
    {name: 'Francia'}
  ];

  private loadingSubs: Subscription;

  constructor(private authService: AuthService,  private uiService: UIService) { }

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear());
  }

  onSubmit(form: NgForm) {
    this.authService.generarSolicitud(
      {
        nombresolicitante: form.value.nombresolicitante,
        correoelectronico: form.value.email,
        origen: form.value.origen,
        destino: form.value.destino,
        fechaviaje: form.value.fechaviaje
      }
    );
  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }

}
