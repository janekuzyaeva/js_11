"use strict";
exports.__esModule = true;
var Sensor = /** @class */ (function () {
    function Sensor(id, name, status) {
        if (status === void 0) { status = (Math.random() > 0.5); }
        this.id = id;
        this.name = name;
        this.status = status;
    }
    return Sensor;
}());
exports.Sensor = Sensor;
