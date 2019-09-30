import { Component } from '@angular/core';
import { AuthService } from '../authentication/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent {
    userObj : any = {};
    constructor(public authService: AuthService) {
        this.userObj = this.authService.getUserData();
        console.log(this.userObj);
    }
}