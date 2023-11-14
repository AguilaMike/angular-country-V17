import { Component } from '@angular/core';

import { ByTemplatePageComponent } from '../../components/by-template-page/by-template-page.component';
import { ByTemplatePageInterface } from '../../interfaces/by-template-page.interface';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  standalone: true,
  imports: [ByTemplatePageComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {
  public config: ByTemplatePageInterface = {
    title: 'By Region',
    searchBox: {
      placeholder: 'Search by region...'
    }
  }
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string): void {
    this.countriesService.searchByRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
