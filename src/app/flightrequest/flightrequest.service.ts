import { Observable } from 'rxjs/Observable';
import { Newflight } from './model/newflight.model';
import { Subject } from 'rxjs/Subject';
import { UIService } from './../shared/ui.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operator/map';

@Injectable()
export class FlightrequestService {

  exercisesChanged = new Subject<Newflight[]>();
  private readonly API_URL_SOLICITUDES = '/api/v1/solicitudespaginador';

  constructor(private http: HttpClient, private uiService: UIService, private cookieService: CookieService) {
  }

  findFlights(pageNumber = 0, pageSize = 5):  Observable<any> {
    const apiURL =  `${this.API_URL_SOLICITUDES}?page=${pageNumber}&size=${pageSize}`;
    return this.http.get(apiURL).pipe(
      item => item
    );
  }

}
