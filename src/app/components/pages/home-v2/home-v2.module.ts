import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';

import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
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


@NgModule({
  declarations: [HomeV2Component, BannerComponent, AboutComponent, ServicesComponent, TeamComponent, BlogpostComponent, BrandsComponent, CasesComponent, TestimonialsComponent, FactsComponent, PageCtaComponent, FtMapComponent],
  imports: [
    CommonModule,
    HomeV2RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgwWowModule
  ]
})
export class HomeV2Module { }
