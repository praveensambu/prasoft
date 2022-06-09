import { Component } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial-helper.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent extends TestimonialHelperService {
  settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
    appendArrows: '.testimonials-arrow',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
}
