import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinRoomFormComponent } from './join-room-form/join-room-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { JoinRoomComponent } from './join-room/join-room.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    JoinRoomFormComponent,
    JoinRoomComponent
  ],
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports : [
    JoinRoomComponent
  ]
})
export class JoinRoomModule { }
