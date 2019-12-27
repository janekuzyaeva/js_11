"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var sensor_model_1 = require("./shared/models/sensor.model");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-project';
        this.flag = true;
        this.maxLenght = 0;
        this.sensors = [];
        // this.sensor1 = new Sensor(1, 'левый датчик', Math.random() > 0.5);
        for (var i = 0; i < 10; i++) {
            this.sensors.push(new sensor_model_1.Sensor(i, 'Название', Math.random() > 0.5));
            this.maxLenght++;
        }
    }
    AppComponent.prototype.onButtonClick = function () {
        this.flag = !this.flag;
    };
    AppComponent.prototype.deleteSensor = function (id) {
        for (var i = 0; i < this.sensors.length; i++) {
            if (this.sensors[i].id === id) {
                id = i;
                break;
            }
        }
        this.sensors.splice(id, 1);
    };
    AppComponent.prototype.addSensor = function (id, online, name) {
        this.sensors.push(new sensor_model_1.Sensor(parseInt(id.value, 10), (name.value === '') ? 'Без названия' : name.value, online.checked));
        this.maxLenght++;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
