import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Location } from './location';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getWeatherInfo(location: string): Observable<Location>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4362decc81b8de8394b0984224bd3761`

    return this.http.get<Location>(url).pipe(
      tap(value => console.log(value)),
      catchError(this.handleError<Location>('getWeather', ))
    )
    
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  }
  
