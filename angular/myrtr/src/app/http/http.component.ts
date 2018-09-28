import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  res : Res
  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.myDtObs().subscribe(
      i => console.log(i),
      err => console.log(err),
      () => console.log(`Completed`)
    )
  }

  fetchWeather(city: string) {
    this.http.weatherByCity(city).subscribe(
      wthRes => {
        this.res = wthRes as Res
      },
      err => console.log(err),
      () => console.log('completed')
     )
  }

  myDtObs(): Observable<number> {
    return Observable.create(sub => {
      // any async operations

      for (let i = 0; i < 100; i++) {
        sub.next(i)
        //if (i % 2 == 0) sub.error(new Error(`${i} is divisible by 2`))
      }
      sub.complete()
    })
  }
}
