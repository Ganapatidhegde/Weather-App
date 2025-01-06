import { Component, Input, OnInit } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
  imports:[WrapperComponent]
})
export class RecentSearchesComponent implements OnInit {
  @Input() recentSearches: any;

  constructor() { }

  ngOnInit() {}

}
