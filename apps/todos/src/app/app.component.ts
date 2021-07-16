import { Component } from '@angular/core';
import { Weather } from './weather';
// import { HttpClient } from '@angular/common/http';
// import { Message } from '@nx-todos/api-interfaces';

@Component({
  selector: 'nx-todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rows: string[] = [];
  pressure = 1050;

  checkWeather() {
    this.rows.push(`${this.pressure} MBar: ` + new Weather(this.pressure).forecast());
  }
}
