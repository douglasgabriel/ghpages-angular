import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.css']
})
export class CardLinkComponent implements OnInit {

  @Input('title')
  title : String;

  @Input('subtitle')
  subtitle : String;

  @Input('icon')
  icon : String;

  @Input('background')
  background : String;

  constructor() { }

  ngOnInit() {
  }

}
