import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-onepage',
  templateUrl: './home-onepage.component.html',
  styleUrls: ['./home-onepage.component.css']
})
export class HomeOnepageComponent implements OnInit, OnDestroy  {

  private wowSubscription: Subscription;
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }  
  classname = "footer-area";
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