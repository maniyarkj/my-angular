import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IData } from 'src/app/interfaces/data.interface';

@Injectable()

export class HttpServices {
    baseURL = Constants.API_URL;

    constructor(public http: HttpClient) {

    }

    httpFileGet(endPoint?, method?, data?) : Observable<IData[]> {
        return this.http.get<IData[]>('assets/data.json')
            .pipe(
            catchError((err: HttpErrorResponse) => {
                return Observable.throw(err.message || 'Server Error');
            })
        )
    }
                        

    httpGetMethod(endPoint?, method?, data?) : any {

        // console.log(endPoint);
        // console.log(method);
        // console.log(data);

        let requestObject = {'ACTION': method};
        !!data && (requestObject = Object.assign(requestObject, data));
        let requestActionObject = { [endPoint] : [requestObject]};
        // let url: string = this.baseURL + encodeURIComponent(JSON.stringify(requestActionObject)) + '&pageNo=-1&pageSize=-1';
        let url: string = this.baseURL + encodeURIComponent(JSON.stringify(requestActionObject)) + '&pageNo=-1&pageSize=-1' + '&env=prod';
        

        // let url = this.baseURL + endPoint;
    
        let httpHeaders = new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('Aut','');
        
        return this.http.get(url, {headers: httpHeaders});
        //return this.http.get(Constants.dummyURL);
    }

    httpPutMethod(data, id) : any {

    }

    httpPostMethod(data): any {

    }
}