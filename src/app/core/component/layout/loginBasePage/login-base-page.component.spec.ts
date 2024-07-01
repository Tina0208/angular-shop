import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBasePageComponent } from './login-base-page.component';

describe('LoginBasePageComponent', () => {
  let component: LoginBasePageComponent;
  let fixture: ComponentFixture<LoginBasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBasePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
