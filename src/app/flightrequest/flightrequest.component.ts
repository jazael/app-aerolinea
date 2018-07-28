import { Subject } from 'rxjs/Subject';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FlightrequestService } from './flightrequest.service';
import { Newflight } from './model/newflight.model';

@Component({
  selector: 'app-flight-request',
  templateUrl: './flightrequest.component.html',
  styleUrls: ['./flightrequest.component.css']
})
export class FlightrequestComponent implements OnInit, OnDestroy {

  ongoingTraining = false;
  exerciseChanged = new Subject<Newflight>();
  exerciseSubscription: Subscription;

  constructor(private flightrequestService: FlightrequestService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
