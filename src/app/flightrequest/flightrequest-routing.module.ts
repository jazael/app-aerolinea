import { FlightrequestComponent } from './flightrequest.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: FlightrequestComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FlightrequestRoutingModule {}
