import { Component } from '@angular/core';
import { JoinRoomComponent } from '../../../../join-room/join-room.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-join-room-action',
  templateUrl: './join-room-action.component.html',
  styleUrls: ['./join-room-action.component.scss']
})
export class JoinRoomActionComponent {

 
  joinRoomDialog: MatDialogRef<JoinRoomComponent> | undefined;

  constructor(private dialogModel: MatDialog) { }

  onJoinRoom() {
     this.joinRoomDialog = this.dialogModel.open(JoinRoomComponent);
  }

}
