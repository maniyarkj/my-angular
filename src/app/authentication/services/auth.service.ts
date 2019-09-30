import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    user: any = {};

    constructor() {

    }

    setUserData(obj): void {
        console.log(obj);
        this.user = obj;
        console.log(this.user);
    }

    getUserData() : any {
        return this.user;
    }
}