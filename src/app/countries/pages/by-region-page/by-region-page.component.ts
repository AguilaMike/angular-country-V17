import { Component } from '@angular/core';

import { ByTemplatePageComponent } from '../../components/by-template-page/by-template-page.component';
import { ByTemplatePageInterface, Country } from '../../interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  standalone: true,
  imports: [ByTemplatePageComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {
  public config: ByTemplatePageInterface = {
    id: 'byRegion',
    title: 'By Region',
    isLoading: false,
    isRegion: true,
    searchBox: {
      placeholder: 'Search by region...'
    },
    table: {
      noDataCountryText: 'No found anything region to show.'
    }
  }
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string): void {
    this.config.isLoading = true;
    this.countriesService.searchByRegion(term).subscribe((countries) => {
      this.countries = countries;
      this.config.isLoading = false;
    });
  }
}
