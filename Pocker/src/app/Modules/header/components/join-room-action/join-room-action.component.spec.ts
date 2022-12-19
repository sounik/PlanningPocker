import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRoomActionComponent } from './join-room-action.component';

describe('JoinRoomActionComponent', () => {
  let component: JoinRoomActionComponent;
  let fixture: ComponentFixture<JoinRoomActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinRoomActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinRoomActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
