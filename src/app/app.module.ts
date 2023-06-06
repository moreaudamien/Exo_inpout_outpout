import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentsComponent } from './parents/parents.component';
import { EnfantsComponent } from './enfants/enfants.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    EnfantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
