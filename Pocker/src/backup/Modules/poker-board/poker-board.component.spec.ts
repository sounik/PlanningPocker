import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerBoardComponent } from './poker-board.component';

describe('PokerBoardComponent', () => {
  let component: PokerBoardComponent;
  let fixture: ComponentFixture<PokerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
