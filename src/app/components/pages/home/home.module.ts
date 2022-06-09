import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
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


@NgModule({
  declarations: [HomeComponent, BannerComponent, ServiceComponent, LatestserviceComponent, CasesComponent, TeamComponent, FactsComponent, BlogpostComponent, FeaturesComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgwWowModule
  ]
})
export class HomeModule { }
