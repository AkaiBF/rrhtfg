import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service'
import { UsersService } from '../../services/users.service'
import { BetsService } from '../../services/bets.service'
import { DenegatedService } from '../../services/denegated.service'
import { AppSettings } from '../../app-setting'

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
	onStars:number
	offStars:number
  public baseroute = AppSettings.API_URL
	leads = []
  detailList = []

  constructor(public _hotelsService:HotelsService, public _usersService:UsersService, public _betsService:BetsService, public _denegationSrv:DenegatedService) { }

  ngOnInit() {
  	this._hotelsService.leads(localStorage.getItem("hotel")).subscribe(response => {
  		for(let i of response) {
        this._hotelsService.betsByReservation(i._id).subscribe(res => {
          if(res.length == 0) {
            this._denegationSrv.search(i._id).subscribe(res2 => {
              if(res2.length == 0) {
                this._usersService.profile(i.user).subscribe(result => {
                  this.leads.push({name: result.name + " " + result.surname, date:this.formatDate(i.startDate, i.endDate), stars: 5, img: result.photo, link: './opportunities/' + result.id, features:i.requirements.features, id:i._id})
                },()=>{})
              }
            })
          }
        },
        err => {
        })
  		}
    }, error => {})
  	this.onStars = 3
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

  createBet(id:string, price:number) {
    this._betsService.create(id, price).subscribe(response => {
      location.href = '/leads'
    }, error => {

    })
  }

  addDenegate(reservation:string) {
    this._denegationSrv.create(reservation).subscribe(res => {
      location.href = "/leads"
    })
  }

  detalles(reservation) {
    this.detailList = []
    if(reservation.features.phone) {
      let output = "Teléfono"
      if(reservation.features.phone.free) {
        output += " gratuito"
      }
      this.detailList.push(output)
    }
    if(reservation.features.television) {
      let output = "Televisión"
      if(reservation.features.television.flat) {
        output += " de pantalla plana"
      }
      if(reservation.features.television.free) {
        output += " gratuita"
      }
      if(reservation.features.television.extra) {
        output += " con canales extra"
      }
      this.detailList.push(output)
    }
    if(reservation.features.safebox) {
      let output = "Caja fuerte"
      if(reservation.features.safebox.free) {
        output += " gratuita"
      }
      this.detailList.push(output)
    }
    if(reservation.features.minibar) {
      let output = "Minibar"
      if(reservation.features.minibar.free) {
        output += " gratuito"
      }
      this.detailList.push(output)
    }
    if(reservation.features.wifi) {
      let output = "Wifi"
      if(reservation.features.wifi.free) {
        output += " gratuito"
      }
      this.detailList.push(output)
    }
    if(reservation.features.bath) this.detailList.push("Bañera")
    if(reservation.features.shower) this.detailList.push("Ducha")
    if(reservation.features.heating) this.detailList.push("Calefacción")
    if(reservation.features.cooling) this.detailList.push("Aire acondicionado")
    if(reservation.features.laundry) this.detailList.push("Lavandería")
    if(reservation.features.garage) this.detailList.push("Garaje")
    if(reservation.features.hairdresser) this.detailList.push("Peluquería")
    if(reservation.features.gym) this.detailList.push("Gimnasio")
    if(reservation.features.warehouse) this.detailList.push("Almacén")
    if(reservation.features.lenceryWarehouse) this.detailList.push("Almacén de lencería")
    if(reservation.features.library) this.detailList.push("Biblioteca")
    if(reservation.features.spa) this.detailList.push("Spa")
    if(reservation.features.swimmingPool) this.detailList.push("Piscina")
    if(reservation.features.pcRoom) this.detailList.push("Sala de ordenadores")
    if(reservation.features.sportCenter) this.detailList.push("Centro deportivo")
    if(reservation.features.playroom) this.detailList.push("Ludoteca")
    if(reservation.features.outterActivities) this.detailList.push("Actividades externas")
  }
}
