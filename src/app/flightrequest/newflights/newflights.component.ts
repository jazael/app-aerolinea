import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FlightrequestService } from '../flightrequest.service';
import { Newflight } from '../model/newflight.model';

@Component({
  selector: 'app-new-flights',
  templateUrl: './newflights.component.html',
  styleUrls: ['./newflights.component.css']
})
export class NewflightsComponent implements OnInit {

  displayedColumns = ['Per', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Newflight>();
  private exChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private flightrequestService: FlightrequestService) { }

  ngOnInit() {
    /*this.exChangedSubscription = this.solicitudesService.finishedexercisesChanged
      .subscribe((exercises: SolicitudVuelo[]) => {
        this.dataSource.data = exercises;
      });*/
  }

}
