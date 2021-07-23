import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-todos-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  time = '';

  ngOnInit(): void {
    setInterval(() => {
      this.time = this.clock();
    }, 1000);
  }

  clock(): string {
      const date = new Date();
      const hours = this.checkLength(date.getHours().toString());
      const minutes = this.checkLength(date.getMinutes().toString());
      const seconds = this.checkLength(date.getSeconds().toString());
      return hours + ':' + minutes + ':' + seconds;
  }

  checkLength(value: string): string {
    return value.length === 1 ? value = '0' + value : value;
  };
}
