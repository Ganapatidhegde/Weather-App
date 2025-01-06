import { Injectable } from '@angular/core';
import { Weather } from './weather-data.type';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  public filetredLocation?: any
  public favtArray: any[] = [];
  constructor() { }
  public weatherData: Weather[] = [
    {
      "location": {
        "name": "Bangalore",
        "region": "Karnataka",
        "country": "India",
        "lat": 12.97,
        "lon": 77.59,
        "timezone": "Asia/Kolkata",
        "localtime": "2024-12-23 15:30"
      },
      "current": {
        "temperature": 24,
        "weather_descriptions": ["Partly Cloudy"],
        "wind_speed": 12,
        "wind_direction": "E",
        "humidity": 55,
        "feelslike": 24,
        "pressure": 1010,
        "visibility": 10,
        "uv_index": 5,
        "maxtemp": 26,
        "mintemp": 18,
        "rain": 30
      },
      "forecast": {
        "2024-12-23": {
          "maxtemp": 26,
          "mintemp": 18,
          "avgtemp": 22,
          "conditions": "Partly Cloudy",
          "chance_of_rain": 20
        },
        "2024-12-24": {
          "maxtemp": 25,
          "mintemp": 17,
          "avgtemp": 21,
          "conditions": "Cloudy",
          "chance_of_rain": 30
        },
        "2024-12-25": {
          "maxtemp": 24,
          "mintemp": 16,
          "avgtemp": 20,
          "conditions": "Rainy",
          "chance_of_rain": 50
        }
      }
    },
    {
      "location": {
        "name": "Chennai",
        "region": "Tamil Nadu",
        "country": "India",
        "lat": 13.08,
        "lon": 80.27,
        "timezone": "Asia/Kolkata",
        "localtime": "2024-12-23 16:00"
      },
      "current": {
        "temperature": 29,
        "weather_descriptions": ["Sunny"],
        "wind_speed": 15,
        "wind_direction": "SE",
        "humidity": 70,
        "feelslike": 32,
        "pressure": 1012,
        "visibility": 12,
        "uv_index": 7,
        "maxtemp": 31,
        "mintemp": 25,
        "rain": 10
      },
      "forecast": {
        "2024-12-23": {
          "maxtemp": 31,
          "mintemp": 25,
          "avgtemp": 28,
          "conditions": "Sunny",
          "chance_of_rain": 10
        },
        "2024-12-24": {
          "maxtemp": 30,
          "mintemp": 24,
          "avgtemp": 27,
          "conditions": "Partly Cloudy",
          "chance_of_rain": 15
        },
        "2024-12-25": {
          "maxtemp": 29,
          "mintemp": 23,
          "avgtemp": 26,
          "conditions": "Cloudy",
          "chance_of_rain": 25
        }
      }
    },
    {
      "location": {
        "name": "Mumbai",
        "region": "Maharashtra",
        "country": "India",
        "lat": 19.07,
        "lon": 72.87,
        "timezone": "Asia/Kolkata",
        "localtime": "2024-12-23 16:15"
      },
      "current": {
        "temperature": 28,
        "weather_descriptions": ["Cloudy"],
        "wind_speed": 10,
        "wind_direction": "NE",
        "humidity": 65,
        "feelslike": 30,
        "pressure": 1011,
        "visibility": 10,
        "uv_index": 6,
        "maxtemp": 30,
        "mintemp": 24,
        "rain": 20
      },
      "forecast": {
        "2024-12-23": {
          "maxtemp": 30,
          "mintemp": 24,
          "avgtemp": 27,
          "conditions": "Cloudy",
          "chance_of_rain": 20
        },
        "2024-12-24": {
          "maxtemp": 29,
          "mintemp": 23,
          "avgtemp": 26,
          "conditions": "Partly Cloudy",
          "chance_of_rain": 15
        },
        "2024-12-25": {
          "maxtemp": 28,
          "mintemp": 22,
          "avgtemp": 25,
          "conditions": "Rainy",
          "chance_of_rain": 30
        }
      }
    },
    {
      "location": {
        "name": "Delhi",
        "region": "Delhi",
        "country": "India",
        "lat": 28.61,
        "lon": 77.20,
        "timezone": "Asia/Kolkata",
        "localtime": "2024-12-23 16:15"
      },
      "current": {
        "temperature": 18,
        "weather_descriptions": ["Partly Cloudy"],
        "wind_speed": 8,
        "wind_direction": "NW",
        "humidity": 40,
        "feelslike": 18,
        "pressure": 1015,
        "visibility": 8,
        "uv_index": 4,
        "maxtemp": 22,
        "mintemp": 14,
        "rain": 5
      },
      "forecast": {
        "2024-12-23": {
          "maxtemp": 22,
          "mintemp": 14,
          "avgtemp": 18,
          "conditions": "Partly Cloudy",
          "chance_of_rain": 5
        },
        "2024-12-24": {
          "maxtemp": 21,
          "mintemp": 13,
          "avgtemp": 17,
          "conditions": "Sunny",
          "chance_of_rain": 0
        },
        "2024-12-25": {
          "maxtemp": 20,
          "mintemp": 12,
          "avgtemp": 16,
          "conditions": "Cloudy",
          "chance_of_rain": 10
        }
      }
    },
    {
      "location": {
        "name": "Hyderabad",
        "region": "Telangana",
        "country": "India",
        "lat": 17.38,
        "lon": 78.47,
        "timezone": "Asia/Kolkata",
        "localtime": "2024-12-23 16:15"
      },
      "current": {
        "temperature": 27,
        "weather_descriptions": ["Sunny"],
        "wind_speed": 12,
        "wind_direction": "E",
        "humidity": 55,
        "feelslike": 29,
        "pressure": 1013,
        "visibility": 12,
        "uv_index": 7,
        "maxtemp": 30,
        "mintemp": 22,
        "rain": 15
      },
      "forecast": {
        "2024-12-23": {
          "maxtemp": 30,
          "mintemp": 22,
          "avgtemp": 26,
          "conditions": "Sunny",
          "chance_of_rain": 10
        },
        "2024-12-24": {
          "maxtemp": 28,
          "mintemp": 21,
          "avgtemp": 25,
          "conditions": "Partly Cloudy",
          "chance_of_rain": 20
        },
        "2024-12-25": {
          "maxtemp": 27,
          "mintemp": 20,
          "avgtemp": 24,
          "conditions": "Rainy",
          "chance_of_rain": 35
        }
      }
    }



  ]
  get weatherDataArray() {
    return this.weatherData;
  }

  getDataByName(cityName: string) {
    this.weatherData.map((city: any) => {
      if (city.location.name === cityName) {
        this.filetredLocation = city;
      }
    })
  }
  getFilteredLocation() {
    return this.filetredLocation;
  }
  updateStorage(item: any, operation: string, localStorageKey: string) {
    var localStorageData: any = localStorage.getItem(localStorageKey);
    var array: any | null = JSON.parse(localStorageData) || [];
    var value = item.location.name;
    if (operation === 'add') {
      this.weatherData.map((data) => {
        if (data.location.name === value) {
          array.push(item);
          window.localStorage.setItem(localStorageKey, JSON.stringify(array));
        }
      })
    } else {
      const filteredValue = array.filter((eachItem: any) => eachItem.location.name !== value);
      window.localStorage.setItem(localStorageKey, JSON.stringify(filteredValue));
    }
  }
  getDataFromLocalStorage(localStorageKey:string) {
    var localStorageData: any = localStorage.getItem(localStorageKey);
    var array: any | null = JSON.parse(localStorageData) || [];
    return array;
  }
}
