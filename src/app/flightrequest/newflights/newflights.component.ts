import { UIService } from './../../shared/ui.service';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSort, MatPaginator, PageEvent } from '@angular/material';
import { FlightrequestService } from '../flightrequest.service';
import { Newflight } from '../model/newflight.model';
import { NewflightDataSource } from '../datasource/newflights.datasource';
import { AcceptflightrequestComponent } from './acceptflightrequest.component';

@Component({
  selector: 'app-new-flights',
  templateUrl: './newflights.component.html',
  styleUrls: ['./newflights.component.css']
})
export class NewflightsComponent implements OnInit {

  // MatPaginator Inputs
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  flight: Newflight;
  dataSource: NewflightDataSource;
  displayedColumns = ['id', 'nombresolicitante', 'correoelectronico', 'fechaviaje', 'origen', 'destino', 'state', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private flightrequestService: FlightrequestService, private dialog: MatDialog, private uiService: UIService) { }

  ngOnInit() {
    this.dataSource = new NewflightDataSource(this.flightrequestService);
    this.dataSource.loadFlight(0, 5);
  }

  onPaginateChange(event) {
    this.dataSource.loadFlight(
      (this.paginator.pageIndex + 1),
      this.paginator.pageSize
    );
  }

  openDialog(identificador: number, solicitante: string, destino: string) {
    const dialogRef = this.dialog.open(AcceptflightrequestComponent, {
      data: {
        identificador: identificador,
        solicitante: solicitante,
        destino: destino
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(identificador);
        this.uiService.showSnackbar('Solicitud de vuelo aprovada con éxito', null, 3000);
      }
    });
  }

}
