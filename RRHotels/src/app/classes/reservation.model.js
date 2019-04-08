"use strict";
exports.__esModule = true;
var requirements_model_1 = require("./requirements.model");
var Reservation = /** @class */ (function () {
    function Reservation() {
        this.name = "";
        this.startDate = "";
        this.endDate = "";
        this.requirements = new requirements_model_1.Requirements;
    }
    return Reservation;
}());
exports.Reservation = Reservation;
