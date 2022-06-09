import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-v5',
  templateUrl: './home-v5.component.html',
  styleUrls: ['./home-v5.component.css']
})
export class HomeV5Component implements OnInit, OnDestroy {

  private wowSubscription: Subscription;
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  classname = "footer-area footer-area-three";
  ftbgimage = "";
  ftlogo = "assets/img/logo-2.1.png";
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
