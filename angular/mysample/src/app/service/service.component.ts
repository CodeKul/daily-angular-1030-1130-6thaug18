import { Component, OnInit } from '@angular/core';
import { SocialServiceService } from '../social-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  // providers: [SocialServiceService]
})
export class ServiceComponent implements OnInit {

  cmpCntr : number

  constructor(
    private scl: SocialServiceService
  ) { }

  ngOnInit() {
  }

  increment() {
    this.cmpCntr = this.scl.incr()
  }
}
