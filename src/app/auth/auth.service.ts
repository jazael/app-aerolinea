import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
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
        private trainingService: TrainingService,
        private uiService: UIService,
        private http: HttpClient
    ) {}

    initAuthListener() {
        /*this.auth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChangue.next(true);
                this.router.navigate(['/training']);
            } else {
                this.trainingService.cancelSubscriptions();
                this.isAuthenticated = false;
                this.router.navigate(['/login']);
                this.authChangue.next(false);
            }
        });*/
    }

    generarSolicitud(solicitudVuelo: SolicitudVuelo) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const body = JSON.stringify(solicitudVuelo);
      this.http.post(this.API_URL_SOLICITUD, body, { headers: headers }).subscribe(data => {
        console.log(data);
        this.uiService.loadingStateChanged.next(true);
        this.uiService.showSnackbar('Solicitud de vuelo creada con éxito', null, 3000);
        },
        (err: HttpErrorResponse) => {
          this.uiService.loadingStateChanged.next(false);
          this.uiService.showSnackbar('Error occurred. Details: ' + err.name + ' ' + err.message, null, 3000);
      });
    }

    login(authData: AuthData) {

        const body = JSON.stringify(authData);
        this.http.post(this.API_URL_LOGIN, body).subscribe((response: HttpResponse<any>) => {
          console.log(response);
          this.uiService.loadingStateChanged.next(true);
          this.uiService.showSnackbar('Successfully added', null, 3000);
          },
          (err: HttpErrorResponse) => {
            this.uiService.loadingStateChanged.next(false);
            this.uiService.showSnackbar('Error occurred. Details: ' + err.name + ' ' + err.message, null, 3000);
        });
    }

    logout() {
        // this.auth.auth.signOut();
    }

    isAuth(): boolean {
        return this.isAuthenticated;
    }

}
