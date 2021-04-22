import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { FaceComponent } from './screens/portfolio/components/face/face.component';
import { SectionTitleComponent } from './screens/portfolio/components/section-title/section-title.component';
import { AboutSectionComponent } from './screens/portfolio/components/about-section/about-section.component';
import { SkillsSectionComponent } from './screens/portfolio/components/skills-section/skills-section.component';
import { WorkHistorySectionComponent } from './screens/portfolio/components/work-history-section/work-history-section.component';
import { WorkHistoryCardComponent } from './screens/portfolio/components/work-history-card/work-history-card.component';
import { FooterComponent } from './screens/portfolio/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    FaceComponent,
    SectionTitleComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    WorkHistorySectionComponent,
    WorkHistoryCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
