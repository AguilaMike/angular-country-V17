import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../interfaces/country';
import { ByTemplatePageInterface } from '../../interfaces/by-template-page.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];
  @Input() config!: ByTemplatePageInterface;

}
