import { Component } from '@angular/core';

import { ByTemplatePageComponent } from '../../components/by-template-page/by-template-page.component';
import { ByTemplatePageInterface } from '../../interfaces/by-template-page.interface';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  standalone: true,
  imports: [ByTemplatePageComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent {
  public config: ByTemplatePageInterface = {
    title: 'By Country',
    searchBox: {
      placeholder: 'Search by country...'
    }
  }
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string): void {
    this.countriesService.searchByCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
