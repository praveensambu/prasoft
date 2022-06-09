import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-two";
  ftbgimage = "assets/img/footer-bg.jpg";
  ftlogo = "assets/img/logo-1.1.png";
  ftshape = "";

  ngOnInit(): void {
  }

}
