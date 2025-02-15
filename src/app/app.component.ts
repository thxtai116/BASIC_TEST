import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { SectionComponent } from "./shared/components/section/section.component";
import { MapComponent } from './shared/components/map/map.component';
import { CalendarComponent } from "./shared/components/calendar/calendar.component";
import { CarouselComponent } from "./shared/components/carousel/carousel.component";
import { AboutComponent } from "./shared/components/about/about.component";
import { MomentsComponent } from "./shared/components/moments/moments.component";
import { ExploreComponent } from "./shared/components/explore/explore.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, HeroComponent, SectionComponent, MapComponent, CalendarComponent, CarouselComponent, AboutComponent, MomentsComponent, ExploreComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-section></app-section>
    <app-map></app-map>
    <app-calendar></app-calendar>
    <app-carousel></app-carousel>
    <app-about></app-about>
    <app-moments></app-moments>
    <app-explore></app-explore>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
