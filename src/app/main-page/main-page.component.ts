import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  countDownDate = new Date("May 27, 2021 01:45:00").getTime();
  now: any;
  distances: any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  showMessage: any;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.settime(),100);
  }

  settime() {
    this.now = new Date().getTime();
    this.distances = this.countDownDate - this.now;
    this.days = Math.floor(this.distances / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.distances % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.distances % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.distances % (1000 * 60)) / 1000);
    this.showMessage = false;
    if(this.distances < 1) {
      this.showMessage = true;
    }
  }
  

}
