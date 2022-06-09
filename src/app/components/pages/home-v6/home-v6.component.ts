import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-v6',
  templateUrl: './home-v6.component.html',
  styleUrls: ['./home-v6.component.css']
})
export class HomeV6Component implements OnInit, OnDestroy {

  private wowSubscription: Subscription;
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  classname = "footer-area footer-area-two";
  ftbgimage = "";
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
