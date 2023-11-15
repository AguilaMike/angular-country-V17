import { Component } from '@angular/core';

import { ByTemplatePageComponent } from '../../components/by-template-page/by-template-page.component';
import { CountriesService } from '../../services/countries.service';
import { ByTemplatePageInterface, Country } from '../../interfaces';

@Component({
  standalone: true,
  imports: [ByTemplatePageComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent {
  public config: ByTemplatePageInterface = {
    id: 'byCapital',
    title: 'By Capital',
    isLoading: false,
    isRegion: false,
    searchBox: {
      placeholder: 'Search by capital...'
    },
    table: {
      noDataCountryText: 'No found anything capital to show.'
    }
  }
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.config.isLoading = true;
    this.countriesService.searchByCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.config.isLoading = false;
    });
  }
}
