import { Component, OnInit } from '@angular/core';
import data from '../../../../data/shop/shop.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public cartItem = data;
  constructor() { }

  ngOnInit(): void {
  }

}
