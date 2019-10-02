import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-forgot',
    templateUrl: 'forgot.component.html',
})
export class ForgotComponent {
    userObj : any = {};
    username: any;
    password: any;
    id: any;


    constructor(public authService: AuthService, public _activatedRoute: ActivatedRoute) {
        this.userObj = this.authService.getUserData();
        console.log(this.userObj);
        console.log(this._activatedRoute.snapshot.paramMap.get('loginId'));

        this._activatedRoute.queryParams.subscribe( param => {
            param.id != undefined ? this.id = param.id : '-1';
            this.password = param.password;
        });

        console.log(this.username);
        console.log(this.password);
    }

    loadUserData() {
        this.userObj = this.authService.getUserData();
        console.log(this.userObj);
    }

    postUserData() {
        
    }

    getForgotData() {
        this.authService.getForgotData();

    }
}