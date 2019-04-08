import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service'
import { ReservationsService } from '../services/reservations.service';
import { BetsService } from '../services/bets.service'
import { ModalController } from '@ionic/angular'
import { ListPage } from '../list/list.page'
import { HotelsService } from '../services/hotels.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  entryComponents: [ListPage],
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    private registering: boolean;
    private email: string
    private password: string;
    private name:string;
    private surname: string;
    private birthday: string;
    private number: number;
    private nationality: string;
    private loggedinside: boolean;
    private pasados: any = []
    private closedbets: any = []
    private pujas: any = []
    private allReservations: any = []

    public reservations:string[] = []

    constructor(private _peopleSrv: PeopleService,
                private reservSrv: ReservationsService,
                private _betsSrv: BetsService,
                private modalCtrl: ModalController,
                private _hotelsSrv: HotelsService) {
        
    }

    ngOnInit() {
        this.loggedin()
        this.registering = false;
    }

    public ionViewWillEnter() {
        this.refresher()
    }

    refresher() {
        this.allReservations = []
        this.pasados = []
        this.closedbets = []
        this.pujas = []
        this.reservations = []
        this.getStatus()
    }

    public register() {
        this._peopleSrv.register(this.name, this.surname, this.birthday, this.email, this.password, this.number, this.nationality).subscribe(response => {
            this.registering = false;
        })
        
    }

    public login() {
        this._peopleSrv.login(this.email, this.password).subscribe((response:any) => {
            localStorage.setItem('token', response.token);
            this.loggedin()
        })       
    }

    public loggedin():void {
        if (localStorage.getItem('token')) this._peopleSrv.profile().subscribe(docs => {
            this.loggedinside = true;
            this.refresher()
        }, error => {
            console.log(error)
            this.loggedinside = false
        });
        else this.loggedinside = false;
    }

    public betsof(i: any) {
        /*this._betsSrv.getByReservation(i).subscribe(docs => {
            console.log(docs)
        })*/
        console.log(i.id)
        this.presentModal(i)
    }

    async presentModal(i:any) {
        const modal = await this.modalCtrl.create({
            component: ListPage,
            componentProps: { id:i }
        });
        modal.onDidDismiss().then(this.refresher)
        await modal.present();
    }

    doRefresh(event) {
        this.allReservations = []
        this.pasados = []
        this.closedbets = []
        this.pujas = []
        this.reservations = []
        this.getStatus()
        console.log(this.reservations)
        event.target.complete()
    }

    // My reservations

    public getStatus() {
        this.reservSrv.openBets().subscribe((reservations: any) => {
            for (let reservation of reservations) {
                this._betsSrv.closedBets(reservation._id).subscribe((closedets: any) => {
                    for (let i of closedets) {
                        this._hotelsSrv.hotel(i.hotel).subscribe((hotel: any) => {
                            let dstartDate = new Date(reservation.startDate)
                            let startDate = dstartDate.getDate() + '/' + (dstartDate.getMonth() + 1) + '/' + dstartDate.getFullYear()
                            let dendDate = new Date(reservation.endDate)
                            let endDate = dendDate.getDate() + '/' + (dendDate.getMonth() + 1) + '/' + dendDate.getFullYear()
                            if (this.isPast(dendDate)) {
                                this.pasados.push({ name: hotel.name, id: i._id, img: hotel.imgs.slide[0], startDate: startDate, endDate: endDate })
                            } else {
                                this.closedbets.push({ name: hotel.name, id: i._id, img: hotel.imgs.slide[0], startDate: startDate, endDate: endDate })
                            }
                        })
                    }
                })
                // Nuevas
                let todate = new Date()
                let predendDate = new Date(reservation.endDate)
                if (todate < predendDate || !reservation.endDate) {
                    this.allReservations.push(reservation)
                }
                
                this._betsSrv.openBets(reservation._id).subscribe((result: any) => {
                    if (todate < predendDate  && result.length != 0) {
                        this.allReservations.pop()
                    }
                    
                    for (let i of result) {
                        if (!this.exists(reservation._id)) {
                            this.reservations.push(reservation._id)
                            this.reservSrv.get(reservation._id).subscribe((reserva: any) => {
                                this._betsSrv.openBets(reserva._id).subscribe((bets: any) => {
                                    let betid = bets[parseInt((Math.random() * bets.length).toString())].hotel
                                    this._hotelsSrv.hotel(betid).subscribe((hote: any) => {
                                        let dstartDate = new Date(reserva.startDate)
                                        let startDate = dstartDate.getDate() + '/' + (dstartDate.getMonth() + 1) + '/' + dstartDate.getFullYear()
                                        let dendDate = new Date(reserva.endDate)
                                        let endDate = dendDate.getDate() + '/' + (dendDate.getMonth() + 1) + '/' + dendDate.getFullYear()
                                        this.pujas.push({ name: reserva.name, id: reserva._id, img: hote.imgs.slide[0], startDate: startDate, endDate: endDate })
                                    })
                                })
                            })
                        }
                    }
                })
            }
        })
        
    }

    public exists(reservation: string): boolean {
        for (let i of this.reservations) {
            if (i == reservation) {
                return true;
            }
        }
        return false;
    }

    public isPast(endDate: Date): boolean {
        let today = new Date()
        if (today.getFullYear() > endDate.getFullYear()) {
            return true;
        } else if (today.getFullYear() == endDate.getFullYear()) {
            if (today.getMonth() > endDate.getMonth()) {
                return true;
            } else {
                if (today.getDate() > endDate.getDate() && today.getMonth() == endDate.getMonth()) {
                    return true;
                } else {
                    return false;
                }
            }
        } else
            return false
    }

    
}
