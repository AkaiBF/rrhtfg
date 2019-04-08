import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string
  public password:string

  constructor(public _hotelsService:HotelsService) { }

  ngOnInit() {
  }
  login() {
  	this._hotelsService.login(this.email, this.password).subscribe(response => {
  		localStorage.setItem("token", response.token)
  		this._hotelsService.getData(response.token).subscribe(result => {
  			console.log(result)
  			localStorage.setItem("hotel", JSON.stringify(result))
        location.href = '/home'
  		}, errorin => {
  		})
  		console.log()
    }, error => {})
  }

  signup() {
    location.href = '/register'
  }
}
