import { Component, OnInit } from '@angular/core';
import { MainPageLinksRepository } from '../../lib/decorators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public links = MainPageLinksRepository;

  constructor() { }

  ngOnInit() {
  }

}
