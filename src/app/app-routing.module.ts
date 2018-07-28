import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { FlightrequestModule } from './flightrequest/flightrequest.module';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'flightrequest', loadChildren: () => FlightrequestModule, canLoad: [AuthGuard] }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})

export class AppRoutingModule {}
