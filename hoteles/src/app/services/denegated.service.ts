import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { AppSettings } from '../app-setting'
import 'rxjs/add/operator/map'

@Injectable()
export class DenegatedService {

  constructor(public net:Http) { }

  create(reservation:string) {
  	let headers = new Headers
  	headers.append('Authorization', localStorage.getItem('token'))
  	return this.net.post(AppSettings.API_URL + 'denegations/register', {reservation:reservation}, {headers:headers}).map(result => result.json())
  }

  search(reservation:string) {
  	let headers = new Headers
  	headers.append('Authorization', localStorage.getItem('token'))
  	return this.net.post(AppSettings.API_URL + 'denegations/search', {reservation:reservation}, {headers:headers}).map(result => result.json())
  }
}
