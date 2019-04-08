"use strict";
exports.__esModule = true;
var address_model_1 = require("./address.model");
var features_model_1 = require("./features.model");
var Requirements = /** @class */ (function () {
    function Requirements() {
        this.address = new address_model_1.Address;
        this.features = new features_model_1.Features;
    }
    return Requirements;
}());
exports.Requirements = Requirements;
