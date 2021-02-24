import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Country } from "src/app/common/country";
import { State } from "src/app/common/state";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private countriesUrl = 'http://localhost:8080/api/v1/countries';
  private statesUrl = 'http://localhost:8080/api/v1/states/';

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {

    return this.httpClient.get<Country[]>(this.countriesUrl);
  }

  getStates(theCountryCode: string): Observable<State[]> {
    
    // search url
    const searchStatesUrl = `${this.statesUrl}/search/${theCountryCode}`;

    return this.httpClient.get<State[]>(searchStatesUrl);
  }

  getCreditCardMonths(startMonth: number): Observable<number[]> {

    let data: number[] = [];
    
    // build an array for "Month" dropdown list
    // - start at current month and loop until 

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {

    let data: number[] = [];

    // build an array for "Year" downlist list
    // - start at current year and loop for next 10 years
    
    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }

    return of(data);
  }

}


