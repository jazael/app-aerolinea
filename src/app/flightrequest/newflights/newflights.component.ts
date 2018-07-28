import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatSort, MatPaginator } from '@angular/material';
import { FlightrequestService } from '../flightrequest.service';
import { Newflight } from '../model/newflight.model';
import { NewflightDataSource } from '../datasource/newflights.datasource';

@Component({
  selector: 'app-new-flights',
  templateUrl: './newflights.component.html',
  styleUrls: ['./newflights.component.css']
})
export class NewflightsComponent implements OnInit {

  flight: Newflight;
  dataSource: NewflightDataSource;
  displayedColumns = ['id', 'nombresolicitante', 'correoelectronico', 'fechaviaje', 'origen', 'destino', 'state'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private flightrequestService: FlightrequestService) { }

  ngOnInit() {
    this.dataSource = new NewflightDataSource(this.flightrequestService);
    this.dataSource.loadFlight(0, 5);
  }

}
