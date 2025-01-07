import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { ClearStorageComponent } from '../clear-storage/clear-storage.component';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
  imports:[WrapperComponent, ClearStorageComponent]
})
export class RecentSearchesComponent implements OnInit {
  @Input() recentSearches: any;
  @Output() updateStorage = new EventEmitter;
  isAlertOpen = false;

  constructor() { }
  setOpen() {
    this.updateStorage.emit('recentSearches');
  }
  ngOnInit() {}

}
