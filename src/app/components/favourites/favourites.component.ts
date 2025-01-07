import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Weather } from 'src/app/services/weather-data.type';
import { IonicModule } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { ClearStorageComponent } from '../clear-storage/clear-storage.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  imports: [IonicModule, WrapperComponent, ClearStorageComponent],
  standalone:true
})
export class FavouritesComponent implements OnInit {
  @Input() favourites: any;
  @Output() updateStorage = new EventEmitter;
  public weatherdata: Weather[] = [];
  constructor(private weatherData: WeatherDataService) { }
  isAlertOpen = false;
  public alertButtons = [
    {
      text: 'No',
      role: 'Cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      handler: () => {
        this.updateStorage.emit('favtItem');
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  ngOnInit() {
  }

}
