import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { ClearStorageComponent } from '../clear-storage/clear-storage.component';
import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
  imports: [WrapperComponent, ClearStorageComponent],
  standalone:true
})
export class RecentSearchesComponent implements OnInit {
  @Input() recentSearches: any;
  isAlertOpen = false;
  @Output() updateStorage = new EventEmitter;

  constructor() { }
  setOpen = ()=> {
    this.updateStorage.emit('recentSearches');
  }
  ngOnInit() {}

}
