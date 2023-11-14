import { Component } from '@angular/core';

import { ByTemplatePageComponent } from '../../components/by-template-page/by-template-page.component';
import { ByTemplatePageInterface } from '../../interfaces/by-template-page.interface';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  standalone: true,
  imports: [ByTemplatePageComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent {
  public config: ByTemplatePageInterface = {
    title: 'By Capital',
    searchBox: {
      placeholder: 'Search by capital...'
    }
  }
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesService.searchByCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
