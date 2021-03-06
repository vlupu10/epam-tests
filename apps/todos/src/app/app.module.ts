import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecapComponent } from './recap/recap.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [AppComponent, RecapComponent, ClockComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
