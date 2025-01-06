import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Weather } from 'src/app/services/weather-data.type';
import { CommonModule, DatePipe, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, IonicModule, CardComponent],
  providers: [
    DatePipe,
  ],
})
export class DashboardComponent implements OnInit {
  public weatherdata: Weather[] = [];
  @Input() weather!: any;
  @Input() isLandingPage!: boolean;
  public hasUrlQuery: string | null = '';
  @Input() current!: any;
  public currentDashboardItem?:any;
  public time: any = '';
  public weatherArray: any = []
  public toggle: boolean = false;
  myClasses: any;
  @HostBinding('style.color') color: string = ''; 
  

  constructor(private weatherData: WeatherDataService, private datePipe: DatePipe, private route:ActivatedRoute) {
    
  }
  ngOnInit() {
    this.currentDashboardItem = this.current;
    this.weatherdata = this.weather;
    this.time = this.datePipe.transform(new Date(), ' dd MMM yyyy hh:mm a');
    this.weatherArray = [
      {
        icon: "thermometer-outline",
        label: "Min - Max",
        max: `${this.weatherdata[0].current.maxtemp }`,
        min: `${this.weatherdata[0].current.mintemp}`
        
      },
      {
        icon: "rainy-outline",
        label: "Precipatation",
        value: `${this.weatherdata[0].current.rain}`

      },
      {
        icon: "water-outline",
        label: "Humidity",
        value: `${this.weatherdata[0].current.humidity}`

      }
    ]
    var localStorageData: any = localStorage.getItem("favtItem");
    var array: any | null = JSON.parse(localStorageData) || [];
    for (let i = 0; i < array.length;i++){
      if (this.weatherData.filetredLocation?.location.name === array[i].location.name) {
        this.toggle = true;
      }
      if (this.weatherdata[0].location.name === array[i].location.name) {
        this.toggle = true;
      }
    }
  }
  get filteredLocation() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let search = params.get('id');
      console.log('search',search)
      this.hasUrlQuery = search;
    })
    if (this.hasUrlQuery){
      let q = this.route.snapshot.queryParams['search']
      this.weatherdata.map((city: any) => {
        if (city.location.name === q) {
          this.currentDashboardItem = city;
        }
      })
    }
    return this.currentDashboardItem
  }
  onClickAdd(currentDashboardItem:any) {
    this.toggle = !this.toggle;
    this.myClasses = {
      'filled': this.toggle,
    };
    let opeartion = this.toggle ? 'add': 'remove'
    this.weatherData.updateStorage({ ...currentDashboardItem, isfavt: this.toggle }, opeartion, 'favtItem')
  }

}
