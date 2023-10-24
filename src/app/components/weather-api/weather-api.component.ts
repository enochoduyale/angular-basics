import { Component } from '@angular/core';
import { Location } from 'src/app/location';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent {
  constructor(private weatherService: WeatherService) { }


  results: Location =
    {
      name: '',
      main: { feels_like: 0, temp: 0, humidity: 0 }, sys: { country: '' }
    }


  search(location: string): void {
    if (!location) {
      alert('Enter a location')
    }

    this.weatherService.getWeatherInfo(location).subscribe(
      info => this.results = info
    )
  

  }


}
