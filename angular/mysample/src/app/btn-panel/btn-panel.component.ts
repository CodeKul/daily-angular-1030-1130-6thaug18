import { Component, OnInit } from '@angular/core';
import { SocialServiceService } from '../social-service.service';

@Component({
  selector: 'app-btn-panel',
  templateUrl: './btn-panel.component.html',
  styleUrls: ['./btn-panel.component.css']
})
export class BtnPanelComponent implements OnInit {

  constructor(
    private scl : SocialServiceService
  ) { }

  ngOnInit() {
  }

  progress(wh : number) {
    if(wh === 1) this.scl.incr()
    else this.scl.decr()
  }
}
