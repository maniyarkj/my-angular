import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgot',
        component: ForgotComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FormsModule
    ],
    
    exports: [RouterModule],
    declarations: [LoginComponent, ForgotComponent]
})

export class AuthModule {

}