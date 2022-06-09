import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';

import { HomeV3RoutingModule } from './home-v3-routing.module';
import { HomeV3Component } from './home-v3.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { CasesComponent } from './cases/cases.component';
import { VideoComponent } from './video/video.component';
import { TeamComponent } from './team/team.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { LatestServicesComponent } from './latest-services/latest-services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { FactsComponent } from './facts/facts.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { BrandsComponent } from './brands/brands.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeV3Component, BannerComponent, ServicesComponent, CasesComponent, VideoComponent, TeamComponent, BlogpostComponent, LatestServicesComponent, WhyUsComponent, FactsComponent, PageCtaComponent, BrandsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeV3RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgwWowModule,
    FormsModule
  ]
})
export class HomeV3Module { }
