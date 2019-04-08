import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { AppSettings } from '../app-setting'

@Injectable()
export class BetsService {

  constructor(public net:Http) { }

  create(reservation:string, price:number) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'competition/register',{ reservation: reservation, price: price}, {headers:headers}).map(result => result.json())
  }

  highest(reservation:string) {
  	let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'competition/highest',{reservation: reservation}, {headers:headers}).map(result => result.json())
  }

  remove(reservation:string) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'competition/remove',{reservation: reservation}, {headers:headers}).map(result => result.json())
  }

  updatePrice(reservation:string, price:number) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'competition/updatePrice',{reservation: reservation, price: price}, {headers:headers}).map(result => result.json())
  }

  closedByHotel() {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'assigned/getbyhotel',{}, {headers:headers}).map(result => result.json())
  }
}
