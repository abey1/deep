
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MyChartComponent } from './my-chart/my-chart.component';
import { HeroComponent } from './hero/hero.component';
import { LeftHeroComponent } from './left-hero/left-hero.component';
import { RightHeroComponent } from './right-hero/right-hero.component';
import { CommentsComponent } from './comments/comments.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { PremiumComponent } from './premium/premium.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    HeroComponent,
    LeftHeroComponent,
    RightHeroComponent,
    CommentsComponent,
    AdvantageComponent,
    PremiumComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
