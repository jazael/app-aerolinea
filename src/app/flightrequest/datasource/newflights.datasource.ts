import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {Newflight} from '../model/newflight.model';
import {FlightrequestService} from '../flightrequest.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {catchError, finalize} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

export class NewflightDataSource implements DataSource<Newflight> {

    private flightsSubject = new BehaviorSubject<Newflight[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private flightrequestService: FlightrequestService) {

    }

    loadFlight(pageIndex: number, pageSize: number) {

        this.loadingSubject.next(true);

        this.flightrequestService.findFlights(pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            ).subscribe(flights => this.flightsSubject.next(flights));
    }

    connect(collectionViewer: CollectionViewer): Observable<Newflight[]> {
        console.log('Connecting data source');
        return this.flightsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.flightsSubject.complete();
        this.loadingSubject.complete();
    }

}
