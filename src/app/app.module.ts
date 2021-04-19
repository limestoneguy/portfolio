import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { FaceComponent } from './screens/portfolio/components/face/face.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    FaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
