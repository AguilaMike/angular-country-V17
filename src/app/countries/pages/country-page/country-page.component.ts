import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountriesService } from './../../services/countries.service';
import { Country } from '../../interfaces';
import { DecimalPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss'
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountriesService: CountriesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.CountriesService.searchDetail(id)),
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        return this.country = country;
      });
  }

  get translations(): { code: string, official: string, common: string }[] {
    let translations: { code: string, official: string, common: string }[] = [];
    if (this.country?.translations) {
      Object.entries(this.country.translations).forEach(([key, value]) => {
        translations.push({ code: key, official: value.official, common: value.common });
      });
    }
    return translations;
  }
}
