import { Newflight } from './model/newflight.model';
import { Subject } from 'rxjs/Subject';
import { UIService } from './../shared/ui.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class FlightrequestService {

  exercisesChanged = new Subject<Newflight[]>();
  private readonly API_URL_SOLICITUDES = '/api/v1/solicitudes';

  constructor(private http: HttpClient, private uiService: UIService, private cookieService: CookieService) {
  }

  obtenerSolicitud() {
    console.log(this.cookieService.get('Authorization'));
    this.http.get(this.API_URL_SOLICITUDES).subscribe(data => {
      if (data) {
      }
    },
    (err: HttpErrorResponse) => {
        console.log('Ha ocurrido un error. Detalle: ' + err.name + ' ' + err.message);
    });
  }

}
