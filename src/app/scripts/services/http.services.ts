import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class HttpServices {
    baseURL = Constants.API_URL;

    constructor(public http: HttpClient) {

    }

    httpGetMethod(endPoint, method, data) : any {

        console.log(endPoint);
        console.log(method);
        console.log(data);

        let requestObject = {'ACTION': method};
        !!data && (requestObject = Object.assign(requestObject, data));
        let requestActionObject = { [endPoint] : [requestObject]};
        // let url: string = this.baseURL + encodeURIComponent(JSON.stringify(requestActionObject)) + '&pageNo=-1&pageSize=-1';
        let url: string = this.baseURL + encodeURIComponent(JSON.stringify(requestActionObject)) + '&pageNo=-1&pageSize=-1' + '&env=prod';
        

        // let url = this.baseURL + endPoint;
    
        let httpHeaders = new HttpHeaders()
        .set('Content-type', 'application/json');
        return this.http.get(url, {headers: httpHeaders});
    }

    httpPutMethod(data, id) : any {

    }

    httpPostMethod(data): any {

    }
}