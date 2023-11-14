import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ByTemplatePageInterface } from '../../interfaces/by-template-page.interface';

import { SearchBoxComponent } from '../../../shared/shared.config';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../country-table/country-table.component';

@Component({
  selector: 'countries-by-template-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-template-page.component.html',
  styleUrl: './by-template-page.component.scss'
})
export class ByTemplatePageComponent implements OnInit {
  @Input() config!: ByTemplatePageInterface;
  @Input() countries!: Country[];
  @Output() onValue: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.config) {
      throw new Error('Config is required');
    }
    if (!this.countries) {
      throw new Error('Countries is required');
    }
  }

  onSearchByControl(term: string): void {
    this.onValue.emit(term);
  }
}
