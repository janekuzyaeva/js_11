import { Component } from '@angular/core';
import { Sensor} from './shared/models/sensor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-project';
  flag = true;
  maxLenght = 0;
  sensors: Sensor[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.sensors.push(new Sensor(i, 'Name', Math.random() > 0.5));
      this.maxLenght++;
    }
  }

  onButtonClick() {
    this.flag = !this.flag;
  }

  deleteSensor(id) {
    for (let i = 0; i < this.sensors.length; i++) {
      if (this.sensors[i].id === id ) {
        id = i;
        break;
      }
    }
    this.sensors.splice(id, 1);
  }

  addSensor(id: HTMLInputElement, online: HTMLInputElement, name: HTMLInputElement) {
    this.sensors.push(new Sensor(parseInt(id.value, 10), (name.value === '') ? 'Noname' : name.value, online.checked));
    this.maxLenght++;
  }
}
