import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poker-point',
  templateUrl: './poker-point.component.html',
  styleUrls: ['./poker-point.component.scss']
})
export class PokerPointComponent {

  @Input()
  point: number;

  constructor() {
    this.point = 0
   }
}
