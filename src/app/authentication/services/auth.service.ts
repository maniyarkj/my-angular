import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServices } from 'src/app/scripts/services/http.services';
import { Observable } from 'rxjs';
import { IData } from 'src/app/interfaces/data.interface';

@Injectable()
export class AuthService {
    user: any = {};
    dataFile = 'assets/data.json';

    constructor(public http: HttpClient, public httpService: HttpServices) {
    }

    setUserData(obj): void {
        console.log(obj);
        this.user = obj;
        console.log(this.user);
    }

    getUserData() : any {
        return this.user;
    }

    getLoginData(data?: any): any {
        console.log(data);

        
        return this.httpService.httpFileGet(); //this.httpService.httpGetMethod('V_USER_LOGIN', 'SELECT', data);
    }

    getForgotData(): any {
        // return this.httpService.httpGetMethod();
    }
}