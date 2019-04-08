import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service'
import { UsersService } from '../../services/users.service'
import { ReservationsService } from '../../services/reservations.service'
import { BetsService } from '../../services/bets.service'

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {
	leads=[]
  selectedId:string
  newPrice:number
  constructor(private _hotelsService:HotelsService, 
              private _usersService:UsersService, 
              private _reservationsService:ReservationsService,
              private _betsService:BetsService) { }

  ngOnInit() {
    this._hotelsService.myBets().subscribe(response => {
      for(let i of response) {
        this._reservationsService.reservationById(i.reservation).subscribe(res => {
          this._usersService.profile(res.user).subscribe(user => {
            this._betsService.highest(i.reservation).subscribe(highestBet => {
              if(user.stars == undefined) user.stars = 3
              this.leads.push({
                id:i.reservation,
                name: user.name + " " + user.surname, 
                stars:user.stars, 
                date: this.formatDate(res.startDate, res.endDate),
                thisPrice: i.price,
                bestPrice: highestBet.price
              })
            },()=>{})
          }, er => {})
        }, err =>{})
      }
    }, error => {})
  }

  counter(num) {
    return new Array(num)
  }

  formatDate(startDate:string, endDate:string) {
    if(startDate == null || endDate == null) return "Sin preferencias"
    let startDay = new Date(startDate)
    let endDay = new Date(endDate)
    let output = startDay.getDate() + "/" + (startDay.getMonth()+1) + "/" + startDay.getFullYear()
    + " - " + endDay.getDate() + "/" + (endDay.getMonth()+1) + "/" + endDay.getFullYear()
    return output
  }

  remove(reservation:string) {
    this._betsService.remove(reservation).subscribe(removed => {}, error => {})
    location.href = '/bets'
  }

  select(reservation:string, newPrice:number) {
    this.selectedId = reservation
    this.newPrice = newPrice
  }

  edit(reservation:string, price:number) {
    this._betsService.updatePrice(reservation, price).subscribe(removed => {}, error => {})
    location.href = '/bets'
  }
}
