import { Injectable } from '@angular/core';
import { AppSettings } from './../app-settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Reservation } from '../classes/reservation.model';

@Injectable({
    providedIn: 'root'
})
export class ClosedBetsService {

    constructor(private net: HttpClient) { }

    register(hotel: string, reservation: string, price: string) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'assigned/register', { hotel: hotel, reservation: reservation, price: price }, { headers: headers })
    }
}
