import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeV6OnepageRoutingModule } from './home-v6-onepage-routing.module';
import { HomeV6OnepageComponent } from './home-v6-onepage.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { ServiceNewsletterComponent } from './service-newsletter/service-newsletter.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { VideoComponent } from './video/video.component';
import { CasesComponent } from './cases/cases.component';
import { CounterComponent } from './counter/counter.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderSingleComponent } from './header-single/header-single.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeV6OnepageComponent, BannerComponent, FeaturesComponent, ServiceNewsletterComponent, WhyUsComponent, VideoComponent, CasesComponent, CounterComponent, FaqsComponent, ContactComponent, HeaderSingleComponent],
  imports: [
    CommonModule,
    HomeV6OnepageRoutingModule,
    SharedModule,
    NgbModule,
    NgwWowModule,
    SlickCarouselModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    FormsModule
  ]
})
export class HomeV6OnepageModule { }
