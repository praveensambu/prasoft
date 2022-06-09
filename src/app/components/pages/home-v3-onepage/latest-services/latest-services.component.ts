import { Component, OnInit } from '@angular/core';
import data from '../../../../data/services.json';

@Component({
  selector: 'app-latest-services',
  templateUrl: './latest-services.component.html',
  styleUrls: ['./latest-services.component.css']
})
export class LatestServicesComponent implements OnInit {
  public services = data;
  constructor() { }

  ngOnInit(): void {
  }

}
