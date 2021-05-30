import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
