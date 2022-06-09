import { Component, OnInit } from '@angular/core';
import data from "../../../../data/faqs.json";
import data2 from "../../../../data/counter.json";

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  public faqs = data;
  public counter = data2;
  constructor() { }

  ngOnInit(): void {
  }

}
