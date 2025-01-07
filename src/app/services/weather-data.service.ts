import { Injectable } from '@angular/core';
import { Weather } from './weather-data.type';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  public filetredLocation?: any
  public favtArray: any[] = [];
  constructor() { }
  public weatherData: Weather[] =
    [
      {
        "location": {
          "name": "Udupi",
          "region": "Karnataka",
          "country": "India",
          "lat": 13.34,
          "lon": 74.74,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 29,
          "weather_descriptions": ["Sunny"],
          "wind_speed": 12,
          "wind_direction": "S",
          "humidity": 72,
          "feelslike": 32,
          "pressure": 1012,
          "visibility": 10,
          "uv_index": 7,
          "maxtemp": 31,
          "mintemp": 23,
          "rain": 12
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 31,
            "mintemp": 23,
            "avgtemp": 27,
            "conditions": "Sunny",
            "chance_of_rain": 15
          },
          "2024-12-24": {
            "maxtemp": 30,
            "mintemp": 22,
            "avgtemp": 26,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 20
          },
          "2024-12-25": {
            "maxtemp": 29,
            "mintemp": 21,
            "avgtemp": 25,
            "conditions": "Rainy",
            "chance_of_rain": 35
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
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 28,
          "weather_descriptions": ["Sunny"],
          "wind_speed": 10,
          "wind_direction": "NW",
          "humidity": 60,
          "feelslike": 30,
          "pressure": 1012,
          "visibility": 9,
          "uv_index": 6,
          "maxtemp": 30,
          "mintemp": 22,
          "rain": 10
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
            "maxtemp": 29,
            "mintemp": 21,
            "avgtemp": 25,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 15
          },
          "2024-12-25": {
            "maxtemp": 28,
            "mintemp": 20,
            "avgtemp": 24,
            "conditions": "Rainy",
            "chance_of_rain": 40
          }
        }
      },
      {
        "location": {
          "name": "Delhi",
          "region": "Delhi",
          "country": "India",
          "lat": 28.61,
          "lon": 77.21,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 18,
          "weather_descriptions": ["Foggy"],
          "wind_speed": 5,
          "wind_direction": "N",
          "humidity": 80,
          "feelslike": 17,
          "pressure": 1015,
          "visibility": 2,
          "uv_index": 2,
          "maxtemp": 20,
          "mintemp": 10,
          "rain": 5
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 20,
            "mintemp": 10,
            "avgtemp": 15,
            "conditions": "Foggy",
            "chance_of_rain": 5
          },
          "2024-12-24": {
            "maxtemp": 18,
            "mintemp": 8,
            "avgtemp": 13,
            "conditions": "Cloudy",
            "chance_of_rain": 10
          },
          "2024-12-25": {
            "maxtemp": 17,
            "mintemp": 7,
            "avgtemp": 12,
            "conditions": "Clear",
            "chance_of_rain": 0
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
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 29,
          "weather_descriptions": ["Partly Cloudy"],
          "wind_speed": 15,
          "wind_direction": "SE",
          "humidity": 65,
          "feelslike": 32,
          "pressure": 1010,
          "visibility": 8,
          "uv_index": 7,
          "maxtemp": 32,
          "mintemp": 24,
          "rain": 20
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 32,
            "mintemp": 24,
            "avgtemp": 28,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 20
          },
          "2024-12-24": {
            "maxtemp": 31,
            "mintemp": 23,
            "avgtemp": 27,
            "conditions": "Cloudy",
            "chance_of_rain": 25
          },
          "2024-12-25": {
            "maxtemp": 30,
            "mintemp": 22,
            "avgtemp": 26,
            "conditions": "Rainy",
            "chance_of_rain": 35
          }
        }
      },
      {
        "location": {
          "name": "Kolkata",
          "region": "West Bengal",
          "country": "India",
          "lat": 22.57,
          "lon": 88.36,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 24,
          "weather_descriptions": ["Clear"],
          "wind_speed": 8,
          "wind_direction": "NE",
          "humidity": 70,
          "feelslike": 25,
          "pressure": 1013,
          "visibility": 10,
          "uv_index": 5,
          "maxtemp": 27,
          "mintemp": 20,
          "rain": 15
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 27,
            "mintemp": 20,
            "avgtemp": 24,
            "conditions": "Clear",
            "chance_of_rain": 15
          },
          "2024-12-24": {
            "maxtemp": 26,
            "mintemp": 19,
            "avgtemp": 23,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 20
          },
          "2024-12-25": {
            "maxtemp": 25,
            "mintemp": 18,
            "avgtemp": 22,
            "conditions": "Rainy",
            "chance_of_rain": 30
          }
        }
      },
      {
        "location": {
          "name": "Pune",
          "region": "Maharashtra",
          "country": "India",
          "lat": 18.52,
          "lon": 73.86,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 22,
          "weather_descriptions": ["Cloudy"],
          "wind_speed": 12,
          "wind_direction": "W",
          "humidity": 55,
          "feelslike": 22,
          "pressure": 1011,
          "visibility": 10,
          "uv_index": 4,
          "maxtemp": 25,
          "mintemp": 18,
          "rain": 10
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 25,
            "mintemp": 18,
            "avgtemp": 22,
            "conditions": "Cloudy",
            "chance_of_rain": 10
          },
          "2024-12-24": {
            "maxtemp": 24,
            "mintemp": 17,
            "avgtemp": 21,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 15
          },
          "2024-12-25": {
            "maxtemp": 23,
            "mintemp": 16,
            "avgtemp": 20,
            "conditions": "Rainy",
            "chance_of_rain": 25
          }
        }
      },
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
          "wind_speed": 10,
          "wind_direction": "E",
          "humidity": 55,
          "feelslike": 24,
          "pressure": 1010,
          "visibility": 10,
          "uv_index": 5,
          "maxtemp": 26,
          "mintemp": 18,
          "rain": 20
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
          "name": "Ahmedabad",
          "region": "Gujarat",
          "country": "India",
          "lat": 23.02,
          "lon": 72.57,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 20,
          "weather_descriptions": ["Clear"],
          "wind_speed": 8,
          "wind_direction": "NW",
          "humidity": 45,
          "feelslike": 20,
          "pressure": 1012,
          "visibility": 10,
          "uv_index": 5,
          "maxtemp": 23,
          "mintemp": 15,
          "rain": 0
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 23,
            "mintemp": 15,
            "avgtemp": 19,
            "conditions": "Clear",
            "chance_of_rain": 0
          },
          "2024-12-24": {
            "maxtemp": 22,
            "mintemp": 14,
            "avgtemp": 18,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 10
          },
          "2024-12-25": {
            "maxtemp": 21,
            "mintemp": 13,
            "avgtemp": 17,
            "conditions": "Cloudy",
            "chance_of_rain": 20
          }
        }
      },
      {
        "location": {
          "name": "Jaipur",
          "region": "Rajasthan",
          "country": "India",
          "lat": 26.92,
          "lon": 75.82,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 18,
          "weather_descriptions": ["Clear"],
          "wind_speed": 6,
          "wind_direction": "NE",
          "humidity": 50,
          "feelslike": 17,
          "pressure": 1013,
          "visibility": 9,
          "uv_index": 3,
          "maxtemp": 22,
          "mintemp": 12,
          "rain": 5
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 22,
            "mintemp": 12,
            "avgtemp": 17,
            "conditions": "Clear",
            "chance_of_rain": 5
          },
          "2024-12-24": {
            "maxtemp": 21,
            "mintemp": 11,
            "avgtemp": 16,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 10
          },
          "2024-12-25": {
            "maxtemp": 20,
            "mintemp": 10,
            "avgtemp": 15,
            "conditions": "Rainy",
            "chance_of_rain": 15
          }
        }
      },
      {
        "location": {
          "name": "Lucknow",
          "region": "Uttar Pradesh",
          "country": "India",
          "lat": 26.85,
          "lon": 80.95,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 16,
          "weather_descriptions": ["Foggy"],
          "wind_speed": 5,
          "wind_direction": "N",
          "humidity": 75,
          "feelslike": 15,
          "pressure": 1010,
          "visibility": 4,
          "uv_index": 2,
          "maxtemp": 19,
          "mintemp": 10,
          "rain": 0
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 19,
            "mintemp": 10,
            "avgtemp": 15,
            "conditions": "Foggy",
            "chance_of_rain": 5
          },
          "2024-12-24": {
            "maxtemp": 18,
            "mintemp": 9,
            "avgtemp": 14,
            "conditions": "Cloudy",
            "chance_of_rain": 10
          },
          "2024-12-25": {
            "maxtemp": 17,
            "mintemp": 8,
            "avgtemp": 13,
            "conditions": "Rainy",
            "chance_of_rain": 20
          }
        }
      },
      {
        "location": {
          "name": "Thiruvananthapuram",
          "region": "Kerala",
          "country": "India",
          "lat": 8.52,
          "lon": 76.93,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 28,
          "weather_descriptions": ["Humid"],
          "wind_speed": 10,
          "wind_direction": "SE",
          "humidity": 80,
          "feelslike": 31,
          "pressure": 1012,
          "visibility": 9,
          "uv_index": 6,
          "maxtemp": 31,
          "mintemp": 24,
          "rain": 30
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 31,
            "mintemp": 24,
            "avgtemp": 27,
            "conditions": "Humid",
            "chance_of_rain": 25
          },
          "2024-12-24": {
            "maxtemp": 30,
            "mintemp": 23,
            "avgtemp": 26,
            "conditions": "Cloudy",
            "chance_of_rain": 30
          },
          "2024-12-25": {
            "maxtemp": 29,
            "mintemp": 22,
            "avgtemp": 25,
            "conditions": "Rainy",
            "chance_of_rain": 40
          }
        }
      },

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
          "weather_descriptions": ["Cloudy"],
          "wind_speed": 15,
          "wind_direction": "E",
          "humidity": 70,
          "feelslike": 25,
          "pressure": 1010,
          "visibility": 10,
          "uv_index": 5,
          "maxtemp": 27,
          "mintemp": 19,
          "rain": 5
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 27,
            "mintemp": 19,
            "avgtemp": 23,
            "conditions": "Cloudy",
            "chance_of_rain": 20
          },
          "2024-12-24": {
            "maxtemp": 26,
            "mintemp": 18,
            "avgtemp": 22,
            "conditions": "Sunny",
            "chance_of_rain": 10
          },
          "2024-12-25": {
            "maxtemp": 25,
            "mintemp": 17,
            "avgtemp": 21,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 15
          }
        }
      },
      {
        "location": {
          "name": "Mysore",
          "region": "Karnataka",
          "country": "India",
          "lat": 12.30,
          "lon": 76.64,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 26,
          "weather_descriptions": ["Sunny"],
          "wind_speed": 8,
          "wind_direction": "NE",
          "humidity": 55,
          "feelslike": 27,
          "pressure": 1012,
          "visibility": 10,
          "uv_index": 6,
          "maxtemp": 29,
          "mintemp": 20,
          "rain": 0
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 29,
            "mintemp": 20,
            "avgtemp": 25,
            "conditions": "Sunny",
            "chance_of_rain": 5
          },
          "2024-12-24": {
            "maxtemp": 28,
            "mintemp": 19,
            "avgtemp": 24,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 10
          },
          "2024-12-25": {
            "maxtemp": 27,
            "mintemp": 18,
            "avgtemp": 23,
            "conditions": "Rainy",
            "chance_of_rain": 30
          }
        }
      },
      {
        "location": {
          "name": "Mangalore",
          "region": "Karnataka",
          "country": "India",
          "lat": 12.91,
          "lon": 74.85,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 30,
          "weather_descriptions": ["Partly Cloudy"],
          "wind_speed": 12,
          "wind_direction": "SW",
          "humidity": 80,
          "feelslike": 33,
          "pressure": 1011,
          "visibility": 8,
          "uv_index": 7,
          "maxtemp": 32,
          "mintemp": 24,
          "rain": 15
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 32,
            "mintemp": 24,
            "avgtemp": 28,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 25
          },
          "2024-12-24": {
            "maxtemp": 31,
            "mintemp": 23,
            "avgtemp": 27,
            "conditions": "Rainy",
            "chance_of_rain": 35
          },
          "2024-12-25": {
            "maxtemp": 30,
            "mintemp": 22,
            "avgtemp": 26,
            "conditions": "Sunny",
            "chance_of_rain": 10
          }
        }
      },
      {
        "location": {
          "name": "Hubli",
          "region": "Karnataka",
          "country": "India",
          "lat": 15.36,
          "lon": 75.13,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 28,
          "weather_descriptions": ["Sunny"],
          "wind_speed": 10,
          "wind_direction": "W",
          "humidity": 65,
          "feelslike": 29,
          "pressure": 1013,
          "visibility": 9,
          "uv_index": 5,
          "maxtemp": 30,
          "mintemp": 21,
          "rain": 10
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 30,
            "mintemp": 21,
            "avgtemp": 26,
            "conditions": "Sunny",
            "chance_of_rain": 10
          },
          "2024-12-24": {
            "maxtemp": 29,
            "mintemp": 20,
            "avgtemp": 25,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 15
          },
          "2024-12-25": {
            "maxtemp": 28,
            "mintemp": 19,
            "avgtemp": 24,
            "conditions": "Rainy",
            "chance_of_rain": 40
          }
        }
      },
      {
        "location": {
          "name": "Belgaum",
          "region": "Karnataka",
          "country": "India",
          "lat": 15.86,
          "lon": 74.51,
          "timezone": "Asia/Kolkata",
          "localtime": "2024-12-23 15:30"
        },
        "current": {
          "temperature": 25,
          "weather_descriptions": ["Partly Cloudy"],
          "wind_speed": 11,
          "wind_direction": "NW",
          "humidity": 60,
          "feelslike": 26,
          "pressure": 1012,
          "visibility": 10,
          "uv_index": 6,
          "maxtemp": 28,
          "mintemp": 18,
          "rain": 5
        },
        "forecast": {
          "2024-12-23": {
            "maxtemp": 28,
            "mintemp": 18,
            "avgtemp": 23,
            "conditions": "Partly Cloudy",
            "chance_of_rain": 20
          },
          "2024-12-24": {
            "maxtemp": 27,
            "mintemp": 17,
            "avgtemp": 22,
            "conditions": "Sunny",
            "chance_of_rain": 10
          },
          "2024-12-25": {
            "maxtemp": 26,
            "mintemp": 16,
            "avgtemp": 21,
            "conditions": "Cloudy",
            "chance_of_rain": 25
          }
        }
      },
        {
          "location": {
            "name": "Gulbarga",
            "region": "Karnataka",
            "country": "India",
            "lat": 17.33,
            "lon": 76.84,
            "timezone": "Asia/Kolkata",
            "localtime": "2024-12-23 15:30"
          },
          "current": {
            "temperature": 22,
            "weather_descriptions": ["Cloudy"],
            "wind_speed": 14,
            "wind_direction": "NE",
            "humidity": 62,
            "feelslike": 23,
            "pressure": 1014,
            "visibility": 9,
            "uv_index": 5,
            "maxtemp": 25,
            "mintemp": 18,
            "rain": 7
          },
          "forecast": {
            "2024-12-23": {
              "maxtemp": 25,
              "mintemp": 18,
              "avgtemp": 21,
              "conditions": "Cloudy",
              "chance_of_rain": 25
            },
            "2024-12-24": {
              "maxtemp": 24,
              "mintemp": 17,
              "avgtemp": 20,
              "conditions": "Rainy",
              "chance_of_rain": 40
            },
            "2024-12-25": {
              "maxtemp": 23,
              "mintemp": 16,
              "avgtemp": 19,
              "conditions": "Sunny",
              "chance_of_rain": 10
            }
          }
        },
        {
          "location": {
            "name": "Shimoga",
            "region": "Karnataka",
            "country": "India",
            "lat": 13.93,
            "lon": 75.57,
            "timezone": "Asia/Kolkata",
            "localtime": "2024-12-23 15:30"
          },
          "current": {
            "temperature": 27,
            "weather_descriptions": ["Partly Cloudy"],
            "wind_speed": 9,
            "wind_direction": "W",
            "humidity": 58,
            "feelslike": 28,
            "pressure": 1013,
            "visibility": 10,
            "uv_index": 6,
            "maxtemp": 29,
            "mintemp": 20,
            "rain": 5
          },
          "forecast": {
            "2024-12-23": {
              "maxtemp": 29,
              "mintemp": 20,
              "avgtemp": 25,
              "conditions": "Partly Cloudy",
              "chance_of_rain": 15
            },
            "2024-12-24": {
              "maxtemp": 28,
              "mintemp": 19,
              "avgtemp": 24,
              "conditions": "Sunny",
              "chance_of_rain": 10
            },
            "2024-12-25": {
              "maxtemp": 27,
              "mintemp": 18,
              "avgtemp": 23,
              "conditions": "Rainy",
              "chance_of_rain": 30
            }
          }
        },
        {
          "location": {
            "name": "Davangere",
            "region": "Karnataka",
            "country": "India",
            "lat": 14.47,
            "lon": 75.92,
            "timezone": "Asia/Kolkata",
            "localtime": "2024-12-23 15:30"
          },
          "current": {
            "temperature": 25,
            "weather_descriptions": ["Sunny"],
            "wind_speed": 10,
            "wind_direction": "SE",
            "humidity": 63,
            "feelslike": 26,
            "pressure": 1011,
            "visibility": 9,
            "uv_index": 6,
            "maxtemp": 28,
            "mintemp": 19,
            "rain": 8
          },
          "forecast": {
            "2024-12-23": {
              "maxtemp": 28,
              "mintemp": 19,
              "avgtemp": 23,
              "conditions": "Sunny",
              "chance_of_rain": 10
            },
            "2024-12-24": {
              "maxtemp": 27,
              "mintemp": 18,
              "avgtemp": 22,
              "conditions": "Partly Cloudy",
              "chance_of_rain": 15
            },
            "2024-12-25": {
              "maxtemp": 26,
              "mintemp": 17,
              "avgtemp": 21,
              "conditions": "Cloudy",
              "chance_of_rain": 25
            }
          }
        },
        {
          "location": {
            "name": "Bijapur",
            "region": "Karnataka",
            "country": "India",
            "lat": 16.83,
            "lon": 75.71,
            "timezone": "Asia/Kolkata",
            "localtime": "2024-12-23 15:30"
          },
          "current": {
            "temperature": 23,
            "weather_descriptions": ["Cloudy"],
            "wind_speed": 13,
            "wind_direction": "NW",
            "humidity": 59,
            "feelslike": 24,
            "pressure": 1013,
            "visibility": 9,
            "uv_index": 5,
            "maxtemp": 26,
            "mintemp": 18,
            "rain": 6
          },
          "forecast": {
            "2024-12-23": {
              "maxtemp": 26,
              "mintemp": 18,
              "avgtemp": 22,
              "conditions": "Cloudy",
              "chance_of_rain": 20
            },
            "2024-12-24": {
              "maxtemp": 25,
              "mintemp": 17,
              "avgtemp": 21,
              "conditions": "Sunny",
              "chance_of_rain": 10
            },
            "2024-12-25": {
              "maxtemp": 24,
              "mintemp": 16,
              "avgtemp": 20,
              "conditions": "Rainy",
              "chance_of_rain": 30
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
  getDataFromLocalStorage(localStorageKey: string) {
    var localStorageData: any = localStorage.getItem(localStorageKey);
    var array: any | null = JSON.parse(localStorageData) || [];
    return array;
  }
}
