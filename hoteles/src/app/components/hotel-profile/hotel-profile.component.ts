import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service'

@Component({
  selector: 'app-hotel-profile',
  templateUrl: './hotel-profile.component.html',
  styleUrls: ['./hotel-profile.component.css']
})
export class HotelProfileComponent implements OnInit {
	galery_on:boolean
  hotel:any
  baseroute:string
  uploadedImage:any

  constructor(private _hotelService:HotelsService) {
    this.baseroute = 'http://localhost:4004/api/v1/hotels/getimage/'
  	this.galery_on = false;
    let id = JSON.parse(localStorage.getItem("hotel"))
    this._hotelService.getData(id).subscribe((hotel) => {
      this.hotel = hotel
    }, error => {
    })
  }

  ngOnInit() {
  }

  swap_galery() {
  	this.galery_on = !this.galery_on
  }

  counter(num) {
    return new Array(num)
  }

  saveImg(option) {
    switch(option) {
      case 0:
      break;
      case 1:
      break;
      case 2:
      break;
      case 3: 
      break;
    }
    let reader = new FileReader()
    reader.onloadend = () => {
      this.uploadedImage = reader.result
      this._hotelService.setImage(option, reader.result).subscribe(res => {
        this.hotel = res
      }, error => {
      })
    }
    reader.readAsDataURL(this.uploadedImage[0])
    
  }

  loadFile(fileInput: any) {
    this.uploadedImage = <Array<File>>fileInput.target.files
    if(this.uploadedImage[0].size < 200000 && (this.uploadedImage[0].type == 'image/jpeg' || this.uploadedImage[0].type == 'image/png')) {
      return this.uploadedImage
    }
  }

}
