import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const components = [];

@Component({
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './principal-template.component.html',
  styleUrl: './principal-template.component.scss'
})
export class PrincipalTemplateComponent {}
