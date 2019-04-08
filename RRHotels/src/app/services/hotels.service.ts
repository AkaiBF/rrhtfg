import { Injectable } from '@angular/core';
import { AppSettings } from './../app-settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Reservation } from '../classes/reservation.model';

@Injectable({
    providedIn: 'root'
})
export class HotelsService {

    constructor(private net: HttpClient) { }

    hotel(id: string) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'hotels/data', { id: id }, { headers: headers })
    }

    photel(id: string) {

        return this.net.post(AppSettings.API_URL + 'hotels/publicprofile', { id: id })
    }
}
