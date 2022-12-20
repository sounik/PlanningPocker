import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-poker-point',
  templateUrl: './poker-point.component.html',
  styleUrls: ['./poker-point.component.scss']
})
export class PokerPointComponent {

  @Input()
  point: number;

  @Input()
  isSelected: boolean = false;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();


  constructor() {
    this.point = 0
   }

   onChange(value:any):void{
      this.change.emit(value);
   }
}
