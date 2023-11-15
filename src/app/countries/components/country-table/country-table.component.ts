import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

import { Country, ByTemplatePageInterface } from '../../interfaces';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent implements OnInit {
  @Input() countries: Country[] = [];
  @Input() config!: ByTemplatePageInterface;
  public noDataCountryText: string = 'No found anything country to show.';

  ngOnInit(): void {
    if (this.config.table?.noDataCountryText) {
      this.noDataCountryText = this.config.table.noDataCountryText;
    }
  }
}
