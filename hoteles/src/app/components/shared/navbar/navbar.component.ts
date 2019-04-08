import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../../services/hotels.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	welogged:boolean

  constructor(private _hotelSrv:HotelsService) { }

  ngOnInit() {
  	if(localStorage.getItem('token')) {
  		this._hotelSrv.myBets().subscribe(response => {
  			this.welogged = true
  		}, error => {
  			this.welogged = false
  		})
  	} else {
  		this.welogged = false
  	}
  }

  logout() {
    localStorage.removeItem('token')
    location.href = '/'
  }

}
