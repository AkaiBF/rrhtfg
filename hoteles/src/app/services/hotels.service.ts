import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { AppSettings } from '../app-setting'
import 'rxjs/add/operator/map'

@Injectable()
export class HotelsService {
	
  constructor(public net:Http) {}

  register(data:object) {
  	return this.net.post(AppSettings.API_URL + 'hotels/register', data)
  }

  getData(id:string) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
  	return this.net.post(AppSettings.API_URL + 'hotels/profile', {}, {headers:headers}).map(result => result.json())
  }

  login(email:string, password:string) {
    return this.net.post(AppSettings.API_URL + 'hotels/login', {email:email, password:password}).map(result => result.json())
  }

  leads(hotel:string) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'reservations/availables', JSON.parse(hotel), {headers:headers}).map(result => result.json())
  }

  betsByReservation(reservationId:string) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'competition/getopenbyreservation', {reservation: reservationId}, {headers:headers}).map(result => result.json())
  }

  myBets() {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'competition/ourbets', {}, {headers:headers}).map(result => result.json())
  }

  setImage(option:number, image:any) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'hotels/setimage', { opt:option, img: image }, { headers:headers }).map(result => result.json())
  }
}
