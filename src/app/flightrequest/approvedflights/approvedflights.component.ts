import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FlightrequestService } from '../flightrequest.service';
import { Newflight } from '../model/newflight.model';

@Component({
  selector: 'app-approved-flights',
  templateUrl: './approvedflights.component.html',
  styleUrls: ['./approvedflights.component.css']
})
export class ApprovedflightsComponent implements OnInit, AfterViewInit, OnDestroy {

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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  ngOnDestroy() {
    if (this.exChangedSubscription) {
      this.exChangedSubscription.unsubscribe();
    }
  }

}
