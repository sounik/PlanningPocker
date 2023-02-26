import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-room-form',
  templateUrl: './join-room-form.component.html',
  styleUrls: ['./join-room-form.component.scss']
})
export class JoinRoomFormComponent implements OnInit {
  
  roomNo : string = '12345';
  
  constructor() { }

  ngOnInit(): void {
  }

}
