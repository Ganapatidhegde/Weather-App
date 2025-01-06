import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Weather } from 'src/app/services/weather-data.type';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [IonicModule, FormsModule, RouterModule],
})
export class SearchComponent implements OnInit {
  public weatherdata: Weather[] = [];
  @Input() filteredData: Weather[] = [];
  @Input() isItemAvailable!: boolean;
  @Input() selectedCountry: string | '' = '';
  constructor(private weatherData: WeatherDataService, r: ActivatedRoute, private router: Router,private location: Location) {
   }
  ngOnInit() {
    this.weatherdata = this.weatherData.weatherDataArray;
  }
  handleClick(country: any) {
    this.weatherData.getDataByName(country.location.name);

    this.router.navigate(['/folder/weather'], { queryParams: { search: country.location.name } });
    this.weatherData.updateStorage({ ...country, isfavt: true }, 'add', 'recentSearches')
  }
 

}
