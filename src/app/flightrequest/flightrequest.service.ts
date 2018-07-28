import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable()
export class FlightrequestService {

  private readonly API_URL_SOLICITUDES = '/api/v1/solicitudes';

  constructor(private http: HttpClient) {
  }

  obtenerSolicitud() {
    /*const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });*/
    this.http.get(this.API_URL_SOLICITUDES).subscribe(data => {
      if (data) {
        /*this.uiService.loadingStateChanged.next(true);
        this.uiService.showSnackbar('Solicitud de vuelo creada con éxito', null, 3000);*/
      }
    },
    (err: HttpErrorResponse) => {
        /*this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar('Ha ocurrido un error al generar la solicitud de vuelo', null, 3000);*/
        console.log('Ha ocurrido un error. Detalle: ' + err.name + ' ' + err.message);
    });
  }

}
