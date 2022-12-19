import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationActionComponent } from './authentication-action.component';

describe('AuthenticationActionComponent', () => {
  let component: AuthenticationActionComponent;
  let fixture: ComponentFixture<AuthenticationActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
