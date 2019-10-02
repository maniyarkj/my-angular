import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    userName: string;
    passWord: string;
    data: any;

    constructor(public _route: Router, public authService: AuthService) {

    }

    login() : void {
        // // console.log('Called Login');
        // console.log(this.userName);
        // console.log(this.passWord);

        // let id = 150;

        // let loginObj = {
        //     'userName': this.userName,
        //     'passWord': this.passWord
        // };

        // // this.authService.setUserData(loginObj);
        // // this._route.navigateByUrl('authentication/forgot');

        // this._route.navigate(['authentication/forgot'], {
        //     queryParams : {
        //         'userName': this.userName,
        //         'password': this.passWord,
        //         'id': 150
        //     }
        // });

        let reqParam = {
            'USER_NAME': this.userName,
            'PASSWORD': this.passWord
        }
        

        this.authService.getLoginData(reqParam).subscribe(
            res => {
                console.log(res);
                this.data = res;
            },
            err => {
                console.log(err);
            }
        )
    }
}
