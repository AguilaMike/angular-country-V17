import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';

import { CountryTableComponent } from '../country-table/country-table.component';
import { LoadingSpinnerComponent, SearchBoxComponent } from '../../../shared/shared.config';
import { CountriesService } from '../../services/countries.service';
import { Region, ByTemplatePageInterface, Country } from '../../interfaces';

@Component({
  selector: 'countries-by-template-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent, LoadingSpinnerComponent, NgClass],
  templateUrl: './by-template-page.component.html',
  styleUrl: './by-template-page.component.scss'
})
export class ByTemplatePageComponent implements OnInit, OnDestroy {
  @Input() config!: ByTemplatePageInterface;
  @Input() countries!: Country[];
  @Output() onValue: EventEmitter<string> = new EventEmitter<string>();
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public onSelectedregion: Region | null = null;
  public onInitTerm: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    if (!this.config) {
      throw new Error('Config is required');
    }
    if (!this.countries) {
      throw new Error('Countries is required');
    }
    this.countries = this.countriesService.cacheStore[this.config.id].countries;
    this.onSelectedregion = this.countriesService.cacheStore[this.config.id].region;
    this.onInitTerm = this.countriesService.cacheStore[this.config.id].term;
  }

  ngOnDestroy(): void {
    this.onSelectedregion = null;
  }

  onSearchByControl(term: string): void {
    this.onValue.emit(term);
  }
}
