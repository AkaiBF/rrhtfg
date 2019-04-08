import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _hotelSrv:HotelsService) {}

  ngOnInit() {
  	if(localStorage.getItem('token')) {
  		this._hotelSrv.myBets().subscribe(response => {
  			location.href = '/hotel'
  		}, error => {
  			location.href = '/login'
  		})
  	} else {
  		location.href = '/login'
  	}
  }
}
