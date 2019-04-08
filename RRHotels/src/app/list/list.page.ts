import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service'
import { Reservation } from '../classes/reservation.model';
import { ModalController, NavParams } from '@ionic/angular'
import { AppSettings } from '../app-settings'
import { BetsService } from '../services/bets.service';
import { HotelsService } from '../services/hotels.service';
import { ClosedBetsService } from '../services/closedbets.service';
import { HotelPage } from '../hotel/hotel.page'
import { HomePage } from '../home/home.page';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    reservation: any
    baseroute: string
    bets:any
   
    constructor(private reservSrv: ReservationsService,
                private modalCtrl: ModalController,
                private betsSrv: BetsService,
                private _params: NavParams,
                private hotelSrv: HotelsService,
                private closedBetsSrv: ClosedBetsService) {
        this.reservation = new Reservation
        this.baseroute = AppSettings.API_URL
        this.reservation = _params.get('id').id
        this.betsSrv.openBets(this.reservation).subscribe(bets => {
            this.bets = bets
            for (let bet of this.bets) {
                this.hotelSrv.hotel(bet.hotel).subscribe((hotel:any) => {
                    bet.bidder = bet.hotel
                    bet.hotel = hotel.name
                    bet.img = hotel.imgs.slide[0]
                })
            }
        })
    }

    reserve(hotel: string) {
        console.log(this.reservation)
        this.betsSrv.closeBet(this.reservation).subscribe(closed => {
            this.betsSrv.searchToClose(this.reservation, hotel).subscribe(found => {
                console.log(found)
                this.closedBetsSrv.register(found[0].hotel, found[0].reservation, found[0].price).subscribe(registered => {
                    this.dismiss()
                })
            })
        })
    }

    public createModal(i: any) {
        console.log(i)
        this.presentModal(i)
    }

    async presentModal(i: any) {
        console.log("Async " + i)
        const modal = await this.modalCtrl.create({
            component: HotelPage,
            componentProps: { id: i }
        });
        await modal.present();
    }

    dismiss() {
        this.modalCtrl.dismiss()
    }

    ngOnInit() {
    }
}
