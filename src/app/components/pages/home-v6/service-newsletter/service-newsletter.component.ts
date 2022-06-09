import { Component, OnInit } from '@angular/core';
import data from "../../../../data/services.json";

@Component({
  selector: 'app-service-newsletter',
  templateUrl: './service-newsletter.component.html',
  styleUrls: ['./service-newsletter.component.css']
})
export class ServiceNewsletterComponent implements OnInit {
  public services = data;
  constructor() { }

  ngOnInit(): void {
  }

}
