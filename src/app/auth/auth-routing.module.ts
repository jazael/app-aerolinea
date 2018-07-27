import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SolicitudvueloComponent } from './solicitud/solicitudvuelo.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'solicitud', component: SolicitudvueloComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}
