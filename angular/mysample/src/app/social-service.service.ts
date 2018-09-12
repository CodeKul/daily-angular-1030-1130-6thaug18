import { LoggerService } from "./logger.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SocialServiceService {

  private cntr: number = 0
  private prgEm: EventEmitter<number>

  constructor(
    private logger: LoggerService
  ) {
    this.prgEm = new EventEmitter()
  }

  incr() {
    this.prgEm.emit(++this.cntr)
    return this.cntr
  }

  decr() {
    this.prgEm.emit(--this.cntr)
    return this.cntr
  }

  val() {
    return this.cntr
  }

  onProgress(cb: (prg: number) => void) {
    this.prgEm.subscribe(prg => cb(prg))
  }

  onEvent() {
  }
}
