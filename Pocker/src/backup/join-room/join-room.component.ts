import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<JoinRoomComponent>) { }
    roomNo : string = '12345';
    close(): void {
      this.dialogRef.close();
    }
    onJoin():void{
      this.dialogRef.close();
    }
  ngOnInit(): void {
  }

}
