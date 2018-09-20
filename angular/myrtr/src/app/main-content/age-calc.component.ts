import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-age-calc',
  templateUrl: './age-calc.component.html',
  styleUrls: ['./age-calc.component.css']
})
export class AgeCalcComponent implements OnInit {

  curYrDt = new Date().getTime()
  yrDt = new Date("1989-06-15T00:00:00+05:30").getTime()
  ag: number
  constructor() { }

  ngOnInit() {
    console.log("Current " + this.curYrDt)
    console.log("DOB " + this.yrDt)
    this.ag = this.calculateAge("06/15/1989")
  }

  calculateAge(birthDate) {
    birthDate = new Date(birthDate);
    let otherDate = new Date();

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() ||
      otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
      years--;
    }

    return years;
  }
}
