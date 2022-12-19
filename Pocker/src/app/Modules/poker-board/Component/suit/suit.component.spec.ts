import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitComponent } from './suit.component';

describe('SuitComponent', () => {
  let component: SuitComponent;
  let fixture: ComponentFixture<SuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
