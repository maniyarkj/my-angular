import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    user: any = {};
    dataFile = 'assets/data.json';

    constructor(public http: HttpClient) {
    }

    setUserData(obj): void {
        console.log(obj);
        this.user = obj;
        console.log(this.user);
    }

    getUserData() : any {
        return this.user;
    }

    getDataFromFile() : any {
        // get
        // put
        // post

        return this.http.get(this.dataFile);
    }

}