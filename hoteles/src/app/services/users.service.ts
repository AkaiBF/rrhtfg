import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { AppSettings } from '../app-setting'

@Injectable()
export class UsersService {

  constructor(public net: Http) { }

  public signup(name:string, surname:string, password:string, email:string, birthday:string, phone:number, nationality:string) {
  	return this.net.post('http://localhost:4004' + '/api/v1/people/register',
  	{
  		name: name,
  		surname: surname,
  		password: password,
  		email: email,
  		birthday: birthday,
  		phone: phone,
  		nationality: nationality
  	})
  }

  profile(id:string) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'people/publicprofile',{ id: id}, {headers:headers}).map(result => result.json())
  }

  publicProfile(id:string) {
    let headers = new Headers
    headers.append('Authorization', localStorage.getItem('token'))
    return this.net.post(AppSettings.API_URL + 'people/publicprofile',{ id: id}, {headers:headers}).map(result => result.json())
  }
  
}
