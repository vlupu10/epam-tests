import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockComponent } from './clock.component';

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkLength should add 0 if string length = 1', () => {
    const checkLength1 = component.checkLength('1');
    expect(checkLength1).toEqual('01');
    const checkLength2 = component.checkLength('10');
    expect(checkLength2).toEqual('10');
  });

  it('clock should return hours:minutes:seconds', () => {
    const time = component.clock();
    const regExp = new RegExp(/[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/);
    expect(time).toMatch(regExp);
  });
});
