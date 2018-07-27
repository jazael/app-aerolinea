import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import { SolicitudVuelo } from './model/solicitudvuelo';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class AuthService {

    private isAuthenticated = false;
    authChangue = new Subject<boolean>();

    constructor(
        private router: Router,
        private trainingService: TrainingService,
        private uiService: UIService,
        private http: HttpClient
    ) {}

    private getHeaders(): HttpHeaders {
      const headerOptions = new HttpHeaders({'Content-Type': 'application/json'});
      return headerOptions;
    }

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
      debugger;
      const headers = this.getHeaders();
      const body = JSON.stringify(solicitudVuelo);
      return this.http.post('http://localhost:8095/v1/solicitud', body, { headers }).map((res: any) => {
        console.log(res);
      });
    }

    login(authData: AuthData) {
      debugger;
        this.uiService.loadingStateChanged.next(true);
        const headers = this.getHeaders();
        const body = JSON.stringify(authData);
        return this.http.post('http://localhost:8095/login', body, { headers }).map((res: any) => {
          console.log(res);
          this.uiService.loadingStateChanged.next(false);
        });
        /*this.auth.auth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                console.log(result);
                this.uiService.loadingStateChanged.next(false);
            })
            .catch(error => {
                this.uiService.loadingStateChanged.next(false);
                this.uiService.showSnackbar(error.message, null, 3000);
            });*/
    }

    logout() {
        // this.auth.auth.signOut();
    }

    isAuth(): boolean {
        return this.isAuthenticated;
    }

}
