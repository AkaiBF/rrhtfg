import { Injectable } from '@angular/core';
import { AppSettings } from './../app-settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor(private net:HttpClient) {
    }

    register(name: string, surname: string, birthday: string, mail: string, password: string, phone: number, nationality: string) {
        return this.net.post(AppSettings.API_URL + 'people/register', {
            name: name,
            surname: surname,
            birthday: birthday,
            phone: phone,
            nationality: nationality,
            email: mail,
            password: password
        })
    }

    verify(token: string) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.get(AppSettings.API_URL + 'people/verify', { headers: headers })
    }

    login(email: string, password: string) {
        return this.net.post(AppSettings.API_URL + 'people/login', { email: email, password: password })
    }

    profile() {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token')})
        return this.net.post(AppSettings.API_URL + 'people/profile', {}, { headers: headers })
    }

    update(name: string, surname: string, email: string, birthday: string, phone: number, nationality: string, photo: any) {
        let headers = new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
        return this.net.post(AppSettings.API_URL + 'people/update', {
            name: name,
            surname: surname,
            birthday: birthday,
            phone: phone,
            nationality: nationality,
            email: email,
            photo:photo
        }, { headers: headers })
        
    }
}
