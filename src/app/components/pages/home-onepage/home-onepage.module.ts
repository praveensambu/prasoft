import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeOnepageRoutingModule } from './home-onepage-routing.module';
import { HomeOnepageComponent } from './home-onepage.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { LatestserviceComponent } from './latestservice/latestservice.component';
import { CasesComponent } from './cases/cases.component';
import { TeamComponent } from './team/team.component';
import { FactsComponent } from './facts/facts.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeaderSingleComponent } from './header-single/header-single.component';


@NgModule({
  declarations: [HomeOnepageComponent, BannerComponent, ServiceComponent, LatestserviceComponent, CasesComponent, TeamComponent, FactsComponent, BlogpostComponent, FeaturesComponent, TestimonialsComponent, HeaderSingleComponent],
  imports: [
    CommonModule,
    HomeOnepageRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgwWowModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ]
})
export class HomeOnepageModule { }
