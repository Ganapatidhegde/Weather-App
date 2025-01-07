import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, IonInput } from '@ionic/angular';
import { Location } from "@angular/common";
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SearchComponent } from '../components/search/search.component';
import { FavouritesComponent } from '../components/favourites/favourites.component';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Weather } from 'src/app/services/weather-data.type';
import { WrapperComponent } from '../components/wrapper/wrapper.component';
import { RecentSearchesComponent } from '../components/recent-searches/recent-searches.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [IonicModule, DashboardComponent, SearchComponent, FavouritesComponent, RecentSearchesComponent],
})
export class FolderPage implements OnInit {
  @ViewChild('input') input!: IonInput;
  public current: any = {};
  public weatherdata: Weather[] = [];
  public filteredData: Weather[] = [];
  public favourites: any = [];
  public recentSearches: any = [];
  public folder!: string;
  public isItemAvailable: boolean = false;
  public isLandingPage: boolean = false;
  public hasUrlQuery: boolean = false;
  public isSearchPage: boolean = false;
  public selectedCountry: string = '';
  private activatedRoute = inject(ActivatedRoute);
  constructor(private location: Location, private router: Router, private weatherData: WeatherDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams['search']) {
      this.hasUrlQuery = true;
    }
    this.weatherdata = this.weatherData.weatherDataArray;
    this.current = this.weatherData.weatherDataArray[0];
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.isLandingPage = this.router.url === '/folder/weather'
    this.isSearchPage = this.router.url === '/folder/search'
    this.favourites = this.weatherData.getDataFromLocalStorage('favtItem');
    this.recentSearches = this.weatherData.getDataFromLocalStorage('recentSearches');
  }
  myBackButton() {

    this.location.back();
  }
  handleClick() {
    this.router.navigate(['/folder/search'])
  }
  updateStorage(key: any) {
    localStorage.removeItem(key);
    if (key = 'favtItem') {
      this.favourites = this.weatherData.getDataFromLocalStorage(key);
    } else {
      this.recentSearches = this.weatherData.getDataFromLocalStorage(key);
    }
  }

  ionViewDidEnter() {
    this.input?.setFocus();
  }
  updateSearchResults(event: any) {
    var val = event.target.value.toLowerCase();
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.filteredData = this.weatherdata.filter((item) => {
        return (item.location.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.isItemAvailable = false;
    }
    this.weatherData.getDataByName(event.target.value);

  }
}
