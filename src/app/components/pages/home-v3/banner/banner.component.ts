import { Component } from '@angular/core';
import { BannerHelperService } from 'src/app/components/helper/banner-helper.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent extends BannerHelperService {

}
