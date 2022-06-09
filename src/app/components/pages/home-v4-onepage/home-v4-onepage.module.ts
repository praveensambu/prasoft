import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgwWowModule } from 'ngx-wow';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeV4OnepageRoutingModule } from './home-v4-onepage-routing.module';
import { HomeV4OnepageComponent } from './home-v4-onepage.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { VideoComponent } from './video/video.component';
import { TeamComponent } from './team/team.component';
import { ProgessBarComponent } from './progess-bar/progess-bar.component';
import { QuoteComponent } from './quote/quote.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HeaderSingleComponent } from './header-single/header-single.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeV4OnepageComponent, BannerComponent, FaqsComponent, AboutComponent, ServicesComponent, VideoComponent, TeamComponent, ProgessBarComponent, QuoteComponent, PageCtaComponent, BlogPostComponent, HeaderSingleComponent],
  imports: [
    CommonModule,
    HomeV4OnepageRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgCircleProgressModule.forRoot(),
    NgwWowModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    FormsModule
  ]
})
export class HomeV4OnepageModule { }
