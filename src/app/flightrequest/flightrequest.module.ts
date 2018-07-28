import { NgModule } from '@angular/core';

import { FlightrequestComponent } from './flightrequest.component';
import { SharedModule } from '../shared/shared.module';
import { NewflightsComponent } from './newflights/newflights.component';
import { FlightrequestRoutingModule} from './flightrequest-routing.module';
import { ApprovedflightsComponent } from './approvedflights/approvedflights.component';

@NgModule({
    declarations: [
      FlightrequestComponent,
      NewflightsComponent,
      ApprovedflightsComponent
    ],
    imports: [
        SharedModule,
        FlightrequestRoutingModule
    ]
})

export class FlightrequestModule {}
