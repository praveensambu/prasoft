import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeV3OnepageRoutingModule } from './home-v3-onepage-routing.module';
import { HomeV3OnepageComponent } from './home-v3-onepage.component';
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
import { HeaderSingleComponent } from './header-single/header-single.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeV3OnepageComponent, BannerComponent, ServicesComponent, CasesComponent, VideoComponent, TeamComponent, BlogpostComponent, LatestServicesComponent, WhyUsComponent, FactsComponent, PageCtaComponent, BrandsComponent, ContactComponent, HeaderSingleComponent],
  imports: [
    CommonModule,
    HomeV3OnepageRoutingModule,
    NgbModule,
    NgwWowModule,
    SlickCarouselModule,
    SharedModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    FormsModule
  ]
})
export class HomeV3OnepageModule { }
