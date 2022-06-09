import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeV2OnepageRoutingModule } from './home-v2-onepage-routing.module';
import { HomeV2OnepageComponent } from './home-v2-onepage.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BrandsComponent } from './brands/brands.component';
import { CasesComponent } from './cases/cases.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FactsComponent } from './facts/facts.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { FtMapComponent } from './ft-map/ft-map.component';
import { HeaderSingleComponent } from './header-single/header-single.component';


@NgModule({
  declarations: [HomeV2OnepageComponent, BannerComponent, AboutComponent, ServicesComponent, TeamComponent, BlogpostComponent, BrandsComponent, CasesComponent, TestimonialsComponent, FactsComponent, PageCtaComponent, FtMapComponent, HeaderSingleComponent],
  imports: [
    CommonModule,
    HomeV2OnepageRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgwWowModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ]
})
export class HomeV2OnepageModule { }
