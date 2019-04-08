import { Injectable } from '@angular/core';
import { AppSettings } from './../app-settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Reservation } from '../classes/reservation.model';

@Injectable({
    providedIn: 'root'
})
export class BetsService {

    constructor(private net: HttpClient) { }

    openBets(reservation: string) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'competition/getopenbyreservation', { reservation: reservation }, { headers: headers })
    }

    closedBets(reservation: string) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'competition/getclosedbyreservation', { reservation: reservation }, { headers: headers })
    }

    closeBet(reservation: string) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'competition/close', { reservation: reservation }, { headers: headers })
    }

    searchToClose(reservation: string, hotel: string) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'competition/findtoclose', { reservation: reservation, hotel: hotel }, { headers: headers })
    }

    getByReservation(reservation) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'bets/getbyreservation', reservation, { headers: headers })
    }
}
