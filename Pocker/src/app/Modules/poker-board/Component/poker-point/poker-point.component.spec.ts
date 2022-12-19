import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerPointComponent } from './poker-point.component';

describe('PokerPointComponent', () => {
  let component: PokerPointComponent;
  let fixture: ComponentFixture<PokerPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokerPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
