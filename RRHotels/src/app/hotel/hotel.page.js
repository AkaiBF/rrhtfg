"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HotelPage = /** @class */ (function () {
    function HotelPage(params, modalCtrl, hotelSrv) {
        var _this = this;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.hotelSrv = hotelSrv;
        this.hotel = {
            features: []
        };
        this.baseroute = '';
        this.galery_on = false;
        // Cogemos el id de lo que se pase por params
        var id = params.get('id');
        this.hotelSrv.photel(id).subscribe(function (ans) {
            _this.hotel = ans;
        }, function (error) {
            console.log("Error " + JSON.stringify(error));
        });
    }
    HotelPage.prototype.swap_galery = function () {
        this.galery_on = !this.galery_on;
    };
    HotelPage.prototype.counter = function (num) {
        return new Array(num);
    };
    HotelPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    HotelPage.prototype.ngOnInit = function () {
    };
    HotelPage.prototype.hotelfeat = function () {
        var output = "Televisi&oacute:n ";
        if (this.hotel.features.television.flat)
            output += " con pantalla plana";
        if (this.hotel.features.television.free)
            output += " gratuita"
                < div;
        var default_1 = /** @class */ (function () {
            function default_1() {
            }
            return default_1;
        }());
        "d-inline" * ngIf;
        "!hotel.features.television.free" > de;
        pago < /div>
            < div;
        var default_2 = /** @class */ (function () {
            function default_2() {
            }
            return default_2;
        }());
        "d-inline" * ngIf;
        "hotel.features.television.extra" > con;
        canales;
        extra. < /div>
            < div;
        var default_3 = /** @class */ (function () {
            function default_3() {
            }
            return default_3;
        }());
        "d-inline" * ngIf;
        "!hotel.features.television.extra" > . < /div>;
    };
    HotelPage = __decorate([
        core_1.Component({
            selector: 'app-hotel',
            templateUrl: './hotel.page.html',
            styleUrls: ['./hotel.page.scss']
        })
    ], HotelPage);
    return HotelPage;
}());
exports.HotelPage = HotelPage;
