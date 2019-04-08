import { Injectable } from '@angular/core';
import { AppSettings } from './../app-settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Reservation } from '../classes/reservation.model';

@Injectable({
    providedIn: 'root'
})
export class ReservationsService {

    constructor(private net: HttpClient) {
    }

    get(reservation: string) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'reservations/getreservation', { id: reservation }, {headers:headers})
    }

    openBets() {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'reservations/myreservations', {}, { headers: headers })
    }

    reserve(reservation: any) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'reservations/reserve', reservation, { headers: headers })
    }
}
