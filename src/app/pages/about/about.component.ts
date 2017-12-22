import { Component, OnInit } from '@angular/core';
import { MainPageLink } from '../../lib/decorators'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
@MainPageLink({
  title   : 'About',
  subtitle: 'Somethings about me',
  icon    : 'ion-ios-person-outline'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
