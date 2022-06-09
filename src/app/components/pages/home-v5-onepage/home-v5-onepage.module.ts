import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeV5OnepageRoutingModule } from './home-v5-onepage-routing.module';
import { HomeV5OnepageComponent } from './home-v5-onepage.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { VideoComponent } from './video/video.component';
import { CasesComponent } from './cases/cases.component';
import { FactsComponent } from './facts/facts.component';
import { TeamComponent } from './team/team.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HeaderSingleComponent } from './header-single/header-single.component';


@NgModule({
  declarations: [HomeV5OnepageComponent, BannerComponent, ServicesComponent, VideoComponent, CasesComponent, FactsComponent, TeamComponent, PageCtaComponent, BlogPostComponent, HeaderSingleComponent],
  imports: [
    CommonModule,
    HomeV5OnepageRoutingModule,
    SharedModule,
    NgbModule,
    NgwWowModule,
    SlickCarouselModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ]
})
export class HomeV5OnepageModule { }
