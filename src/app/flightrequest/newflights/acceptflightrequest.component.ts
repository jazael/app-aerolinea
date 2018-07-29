import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
   selector: 'app-accept-flight-request',
   template: `<h1 mat-dialog-title>Estás seguro que deseas aprobar esta solicitud ?</h1>
                <mat-dialog-content>
                  <p><mat-icon color="primary">person</mat-icon> {{ parameters.solicitante }}</p>
                  <p><mat-icon color="primary">airplanemode_active</mat-icon> {{ parameters.destino }}</p>
                </mat-dialog-content>
                <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true" matTooltip="Aceptar Vuelo">Si</button>
                <button mat-button [mat-dialog-close]="false" matTooltip="Rechazar Vuelo">No</button>
                </mat-dialog-actions>`
})

export class AcceptflightrequestComponent {
    constructor(
      @Inject(MAT_DIALOG_DATA) public parameters: any
    ) { }
}
