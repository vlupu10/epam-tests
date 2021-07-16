import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('checkWeather', () => {
    it('check weather should return a new row', () => {
      component.rows = [];
      component.pressure = 1050;
      component.checkWeather();
      expect(component.rows).toHaveLength(1);
      expect(component.rows[0]).toEqual(`1050 MBar: Extreme hot!`);
    });
  
  });
});
