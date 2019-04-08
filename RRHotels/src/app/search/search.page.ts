import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    public name: string
    public startDate: Date
    public endDate: Date
    public address: string
    public country: string
    public community: string
    public score: number
    public stars: number
    public phone: boolean
    public freePhone: boolean
    public television: boolean
    public freeTelevision: boolean
    public extraTelevision: boolean
    public flatTelevision: boolean
    public safebox: boolean
    public freeSafebox: boolean
    public minibar: boolean
    public freeMinibar: boolean
    public wifi: boolean
    public freeWifi: boolean
    public bath: boolean
    public shower: boolean
    public heating: boolean
    public cooling: boolean
    public laundry: boolean
    public garage: boolean
    public hairdresser: boolean
    public gym: boolean
    public warehouse: boolean
    public lenceryWarehouse: boolean
    public library: boolean
    public spa: boolean
    public swimmingPool: boolean
    public pcRoom: boolean
    public sportCenter: boolean
    public playroom: boolean
    public outterActivities: boolean
    public countries: string[]

    constructor(private reservationSrv: ReservationsService,
                private navCtrl: NavController,
                private alertCtrl: AlertController) { }

    ngOnInit() {
        this.countries = ["España", "Francia", "Gran Bretaña"]
    }
    coms(country: string) {
        return ["Canarias", "Madrid", "Cataluña"]
    }
    citadel(com: string) {
        return ["Tarrassa", "Tarragona", "Barcelona"]
    }

    addSearch() {
        let reservation = {
            name: this.name,
            startDate: this.startDate,
            endDate: this.endDate,
            requirements: {
                address: {
                    address: this.address,
                    country: this.country,
                    community: this.community
                },
                features: {
                    score: this.score,
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
        this.reservationSrv.reserve(reservation).subscribe((result) => {
            this.presentAlert()
        }, (error) => {
            this.presentError()
        })
    }

    async presentAlert() {
        const alert = await this.alertCtrl.create({
            header: 'Genial',
            subHeader: '',
            message: 'Tu b&uacute;squeda ha sido guardada con &eacute;xito',
            buttons: ['Aceptar']
        })
        await alert.present()
    }

    async presentError() {
        const alert = await this.alertCtrl.create({
            header: 'Ups',
            subHeader: '',
            message: 'Ha ocurrido un error inesperado con tu b&uacute;squeda',
            buttons: ['Aceptar']
        })
        await alert.present()
    }
}
