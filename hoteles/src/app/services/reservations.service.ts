import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { AppSettings } from '../app-setting'
import 'rxjs/add/operator/map'

@Injectable()
export class ReservationsService {

  constructor(public net:Http) { }

  profile(token:string) {
  	
  }

  availables(hotel:object) {

  }

  reservationById(id:string) {
  	let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
  	return this.net.post(AppSettings.API_URL + 'reservations/getreservation', {id: id}, {headers:headers}).map(result => result.json())
  }

}
