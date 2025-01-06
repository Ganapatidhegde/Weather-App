export interface Weather{
    "location": Location,
    "current": Current,
    "forecast": any

}
export interface Location{
    "name": string,
    "region": string,
    "country": string,
    "lat": Number,
    "lon": Number,
    "timezone": string,
    "localtime": string,
}
export interface Current {
    "temperature": Number,
    "weather_descriptions": string[],
    "wind_speed": Number,
    "wind_direction": string,
    "humidity": Number,
    "feelslike": Number,
    "pressure": Number,
    "visibility": Number,
    "uv_index": Number,
    "maxtemp": Number,
    "mintemp": Number,
    "rain": Number
}
export interface ForeCast{
    [key: string]:EachKey;
}
export interface EachKey{
    "maxtemp": Number,
    "mintemp": Number,
    "avgtemp": Number,
    "conditions": string,
    "chance_of_rain": Number
}
