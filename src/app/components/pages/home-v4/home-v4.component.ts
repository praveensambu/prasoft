import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-v4',
  templateUrl: './home-v4.component.html',
  styleUrls: ['./home-v4.component.css']
})
export class HomeV4Component implements OnInit, OnDestroy {

  private wowSubscription: Subscription;
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  classname = "footer-area footer-area-two";
  ftbgimage = "assets/img/footer-bg.jpg";
  ftlogo = "assets/img/logo-1.1.png";
  ftshape = "d-none";

  ngOnInit(): void {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (_item: HTMLElement) => {
        // do whatever you want with revealed element
      });
  }
  ngOnDestroy() {
    this.wowSubscription.unsubscribe();
  }

}
