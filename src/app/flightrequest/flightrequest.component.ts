import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FlightrequestService } from './flightrequest.service';

@Component({
  selector: 'app-flight-request',
  templateUrl: './flightrequest.component.html',
  styleUrls: ['./flightrequest.component.css']
})
export class FlightrequestComponent implements OnInit, OnDestroy {

  ongoingTraining = false;

  exerciseSubscription: Subscription;

  constructor(private flightrequestService: FlightrequestService) { }

  ngOnInit() {
    /*this.exerciseSubscription = this.solicitudesService.exerciseChanged.subscribe(
      exercise => {
        (exercise) ? this.ongoingTraining = true : this.ongoingTraining = false;
      }
    );*/
  }

  ngOnDestroy() {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }

}
