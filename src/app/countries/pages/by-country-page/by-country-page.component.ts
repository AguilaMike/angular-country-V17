import { Component } from '@angular/core';

import { ByTemplatePageComponent } from '../../components/by-template-page/by-template-page.component';
import { ByTemplatePageInterface, Country } from '../../interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  standalone: true,
  imports: [ByTemplatePageComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent {
  public config: ByTemplatePageInterface = {
    id: 'byCountry',
    title: 'By Country',
    isLoading: false,
    isRegion: false,
    searchBox: {
      placeholder: 'Search by country...'
    },
    table: {
      noDataCountryText: 'No found anything country to show.'
    }
  }
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string): void {
    this.config.isLoading = true;
    this.countriesService.searchByCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.config.isLoading = false;
    });
  }
}
