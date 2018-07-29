import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { FlightrequestService } from '../flightrequest/flightrequest.service';
import { UIService } from '../shared/ui.service';
import { SolicitudVuelo } from './model/solicitudvuelo';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Injectable()
export class AuthService {

    private isAuthenticated = false;
    authChangue = new Subject<boolean>();
    private readonly API_URL_SOLICITUD = '/api/v1/solicitud';
    private readonly API_URL_LOGIN = '/api/login';
    constructor(
        private router: Router,
        private flightrequestService: FlightrequestService,
        private uiService: UIService,
        private http: HttpClient
    ) {}

    initAuthListener() {
      this.uiService.loadingStateChanged.subscribe(logged => {
            if (logged) {
                this.isAuthenticated = true;
                this.authChangue.next(true);
                this.router.navigate(['/flightrequest']);
            } else {
                this.isAuthenticated = false;
                this.router.navigate(['/login']);
                this.authChangue.next(false);
            }
        });
    }

    generarSolicitud(solicitudVuelo: SolicitudVuelo) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const body = JSON.stringify(solicitudVuelo);
      this.http.post(this.API_URL_SOLICITUD, body, { headers: headers }).subscribe(data => {
        if (data) {
          this.uiService.showSnackbar('Solicitud de vuelo creada con éxito', null, 3000);
          this.router.navigate(['/']);
        }
      },
      (err: HttpErrorResponse) => {
          this.uiService.showSnackbar('Ha ocurrido un error al generar la solicitud de vuelo', null, 3000);
          console.log('Ha ocurrido un error. Detalle: ' + err.name + ' ' + err.message);
      });
    }

    login(authData: AuthData) {
        const body = JSON.stringify(authData);
        this.http.post(this.API_URL_LOGIN, body).subscribe((response) => {
          this.uiService.loadingStateChanged.next(true);
          this.uiService.showSnackbar('Credenciales correctas', null, 3000);
          },
          (err: HttpErrorResponse) => {
            this.uiService.loadingStateChanged.next(false);
            console.log('Ha ocurrido un error. Detalle: ' + err.name + ' ' + err.message);
            this.uiService.showSnackbar('Estimado usuario sus credenciales son incorrectas, por favor verificar', null, 3000);
        });
    }

    logout() {
      this.uiService.loadingStateChanged.next(false);
    }

    isAuth(): boolean {
        return this.isAuthenticated;
    }

}
