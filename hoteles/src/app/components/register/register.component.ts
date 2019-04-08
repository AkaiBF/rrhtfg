import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public name:string
  public email:string
  public password:string
  public address:string
  public country:string
  public community:string
  public city:string
  public cp:string
  public stars:number
  public wifi:boolean
  public freeWifi:boolean
  public phone:boolean
  public freePhone:boolean
  public television:boolean
  public freeTelevision:boolean
  public extraTelevision:boolean
  public flatTelevision:boolean
  public safebox:boolean
  public freeSafebox:boolean
  public minibar:boolean
  public freeMinibar:boolean
  public bath:boolean
  public shower:boolean
  public heating:boolean
  public cooling:boolean
  public laundry:boolean
  public garage:boolean
  public hairdresser:boolean
  public gym:boolean
  public warehouse:boolean
  public lenceryWarehouse:boolean
  public library:boolean
  public spa:boolean
  public swimmingPool:boolean
  public pcRoom:boolean
  public sportCenter:boolean
  public playroom:boolean
  public outterActivities:boolean
  public realStars:number
  

  constructor(public _hotelsService:HotelsService) {
  }

  ngOnInit() {
  	this.stars = 0
    this.realStars = 0
  }
	counter(num) {
  	return new Array(num)
  }
  setStars(num) {
  	this.stars = num
  }
  setRealStars(num) {
    this.realStars = num
  }
  register() {
    let object = {
      name: this.name,
      email: this.email,
      password: this.password,
      requirements: {
        address: {
          address: this.address,
          country: this.country,
          community: this.community,
          city: this.city,
          cp: this.cp
        },
        features: {
          score: 0,
          stars: this.stars,
          phone: {
            enabled: this.phone,
            free: this.freePhone
          },
          television: {
            enabled: this.television,
            free: this.freeTelevision,
            extra: this.extraTelevision,
            flat: this.flatTelevision
          },
          safebox: {
            enabled: this.safebox,
            free: this.freeSafebox
          },
          minibar: {
            enabled: this.minibar,
            free: this.freeMinibar
          },
          wifi: {
            enabled: this.wifi,
            free: this.freeWifi
          },
          bath: this.bath,
          shower: this.shower,
          heating: this.heating,
          cooling: this.cooling,
          laundry: this.laundry,
          garage: this.garage,
          hairdresser: this.hairdresser,
          gym: this.gym,
          warehouse: this.warehouse,
          lenceryWarehouse: this.lenceryWarehouse,
          library: this.library,
          spa: this.spa,
          swimmingPool: this.swimmingPool,
          pcRoom: this.pcRoom,
          sportCenter: this.sportCenter,
          playroom: this.playroom,
          outterActivities: this.outterActivities
        }
      }
    }
    console.log(object)
    this._hotelsService.register(object).subscribe(response => {
      location.href='/login'
      console.log("OK")
    }, error => {
      console.log(error)
    })
  }


}
