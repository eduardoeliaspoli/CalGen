import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/navbar/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Calendario2023Component } from './page/calendario2023/calendario2023.component';
import { Calendario2022Component } from './page/calendario2022/calendario2022.component';
import { LocalDateTimePipe } from './share/local-date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Calendario2023Component,
    Calendario2022Component,
    LocalDateTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [LocalDateTimePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
