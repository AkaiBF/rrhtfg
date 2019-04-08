import { Component, OnInit } from '@angular/core';
import { BetsService } from '../../services/bets.service'
import { ReservationsService } from '../../services/reservations.service'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
	clients:any[] = []

  constructor(public _betsService:BetsService,
              public _reservationsService:ReservationsService,
              public _usersService:UsersService) {
  	this._betsService.closedByHotel().subscribe(closed => {
  		for(let i of closed) {
        this._reservationsService.reservationById(i.reservation).subscribe( reservation => {
          this._usersService.publicProfile(reservation.user).subscribe(user => {
            this.clients.push({id: i._id, name: user.name + " " + user.surname, startDate: this.formatDate(reservation.startDate), endDate: this.formatDate(reservation.endDate), price: i.price, tfno: user.phone})
          })
        })
  		}
  	})
  }

  ngOnInit() {
  }

  formatDate(dateStr:string) {
    if(!dateStr || dateStr == '') return 'undefined'
    let date = new Date(dateStr)
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() 
  }

}
