import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  miuntes = 0;
  seconds = 0;

  private timerId : any ;
  private running = false;
  private noOfMilliSecondsInASecond : number = 1000;

  isRunning() : boolean {
    return this.running;
  }

  toggleTimer() {
    if (!this.isRunning()) {
      this.timerId = setInterval(() => {
        if (this.isThresholdReached()) {
          clearInterval(this.timerId);
          this.running = false;
        }
        this.IncrementTime();
      }, this.noOfMilliSecondsInASecond);
    } 
    else {
      clearInterval(this.timerId);
    }
    this.running = !this.isRunning();
  }

  resetTimer(){
    clearInterval(this.timerId);
    this.miuntes = 0;
    this.seconds = 0;
    this.running = false;
  }

  getTime(){
    return `${this.format(this.miuntes) }:${this.format(this.seconds) }` 
  }

  private format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  private IncrementTime() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.miuntes++;
      this.seconds = 0;
    }
  }

  private isThresholdReached() {
    return this.miuntes === 2;
  }
}
