import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeV6RoutingModule } from './home-v6-routing.module';
import { HomeV6Component } from './home-v6.component';
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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeV6Component, BannerComponent, FeaturesComponent, ServiceNewsletterComponent, WhyUsComponent, VideoComponent, CasesComponent, CounterComponent, FaqsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeV6RoutingModule,
    SharedModule,
    NgbModule,
    NgwWowModule,
    SlickCarouselModule,
    FormsModule
  ]
})
export class HomeV6Module { }
