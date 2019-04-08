import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
    galery_on: boolean
    hotel: any
    baseroute: string
    uploadedImage: any

    constructor(private params: NavParams,
        private modalCtrl: ModalController,
        private hotelSrv: HotelsService) {
        this.hotel = {
            features: []
        }
        this.baseroute = ''
        this.galery_on = true
        // Cogemos el id de lo que se pase por params
        let id = params.get('id')
        this.hotelSrv.photel(id).subscribe(ans => {
            this.hotel = ans
        }, error => {
            console.log("Error " + JSON.stringify(error))
        })

    }

    swap_galery() {
        this.galery_on = !this.galery_on
    }

    counter(num:number) {
        return new Array(num)
    }

    dismiss() {
        this.modalCtrl.dismiss()
    }

  ngOnInit() {
  }

    hotelfeat(): string {
        let output = ""
        if (this.hotel.features.television.flat)
            output += " con pantalla plana"
        if (this.hotel.features.television.free)
            output += " gratuita"
        else 
            output += " de pago"
        if (this.hotel.features.television.extra)
            output += " con canales extra"
        return (output + ".")
    }
}
