import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  constructor() {}

  onCountActiveToInactive() {
    this.activeToInactiveCount++;
    console.log(this.activeToInactiveCount);
  }
  onCountInactiveToActive() {
    this.inactiveToActiveCount++;
    console.log(this.inactiveToActiveCount);
  }
}
