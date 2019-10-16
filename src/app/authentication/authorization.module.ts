import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { FindDaysBetweenDates } from '../scripts/myPipes/days.pipe';


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
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    
    exports: [RouterModule],
    declarations: [LoginComponent, ForgotComponent, FindDaysBetweenDates]
})

export class AuthModule {

}