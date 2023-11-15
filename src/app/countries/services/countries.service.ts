import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Country, CacheStore } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    ['byCapital']: { term: '', region: null, countries: [] },
    ['byCountry']: { term: '', region: null, countries: [] },
    ['byRegion']: { term: '', region: null, countries: [] },
  };

  constructor(private http: HttpClient) {
    this.loadToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadToLocalStorage(): void {
    if (localStorage.getItem('cacheStore')) {
      this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.searchCountries(url, term, 'byCapital');
  }

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.searchCountries(url, term, 'byCountry');
  }

  searchByRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.searchCountries(url, term, 'byRegion');
  }

  searchDetail(term: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.searchCountries(url, null, null)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null)
      );
  }

  private searchCountries(url: string, term: string | null, property: string | null): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([])),
        tap(countries => {
          if (term && property) {
            this.cacheStore[property].term = term;
            this.cacheStore[property].countries = countries;
            if (property === 'byRegion') {
              this.cacheStore[property].region = term as any;
            }
            this.saveToLocalStorage();
          }
        }),
      );
  }
}
