import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public static dummyURL = 'assets/data.json';
    public static API_URL = 'http://smvsweb.azurewebsites.net/smvs/index.jsp?json=';
    public static DATE_FORMAT = 'dd/mm/yyyy';
}