import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { FaceComponent } from './screens/portfolio/components/face/face.component';
import { SectionTitleComponent } from './screens/portfolio/components/section-title/section-title.component';
import { AboutSectionComponent } from './screens/portfolio/components/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    FaceComponent,
    SectionTitleComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
