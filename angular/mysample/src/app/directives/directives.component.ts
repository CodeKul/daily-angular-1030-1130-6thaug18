import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  obj = {
    border: '10px solid red'
  }

  countries = [
    { country : 'India', flag : '../../assets/'},
    { country : 'Japan', flag : '../../assets/'},
    { country : 'Chiana', flag : '../../assets/'},
    { country : 'Nepal', flag : '../../assets/'},
    { country : 'Sri Lanka', flag : '../../assets/'}
  ]

  mobs = ['android', 'apple', 'bb', 'samsung', 'htc', 'moto']

  constructor() { }

  ngOnInit() {
  }

}
