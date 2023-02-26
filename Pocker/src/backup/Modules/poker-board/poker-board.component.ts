import { Component, OnInit } from '@angular/core';
import { PokerPointComponent } from './Component/poker-point/poker-point.component';


@Component({
  selector: 'app-poker-board',
  templateUrl: './poker-board.component.html',
  styleUrls: ['./poker-board.component.scss']
})
export class PokerBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
