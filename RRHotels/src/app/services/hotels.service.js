"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var app_settings_1 = require("./../app-settings");
var http_1 = require("@angular/common/http");
var HotelsService = /** @class */ (function () {
    function HotelsService(net) {
        this.net = net;
    }
    HotelsService.prototype.hotel = function (id) {
        var headers = new http_1.HttpHeaders({ 'Authorization': localStorage.getItem('token') });
        return this.net.post(app_settings_1.AppSettings.API_URL + 'hotels/data', { id: id }, { headers: headers });
    };
    HotelsService.prototype.photel = function (id) {
        return this.net.post(app_settings_1.AppSettings.API_URL + 'hotels/publicprofile', { id: id });
    };
    HotelsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HotelsService);
    return HotelsService;
}());
exports.HotelsService = HotelsService;
