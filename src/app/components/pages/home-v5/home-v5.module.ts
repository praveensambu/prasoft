import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeV5RoutingModule } from './home-v5-routing.module';
import { HomeV5Component } from './home-v5.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { VideoComponent } from './video/video.component';
import { CasesComponent } from './cases/cases.component';
import { FactsComponent } from './facts/facts.component';
import { TeamComponent } from './team/team.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  declarations: [HomeV5Component, BannerComponent, ServicesComponent, VideoComponent, CasesComponent, FactsComponent, TeamComponent, PageCtaComponent, BlogPostComponent],
  imports: [
    CommonModule,
    HomeV5RoutingModule,
    SharedModule,
    NgbModule,
    NgwWowModule,
    SlickCarouselModule
  ]
})
export class HomeV5Module { }
