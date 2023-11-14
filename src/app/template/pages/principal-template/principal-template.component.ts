import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

const components = [SidebarComponent];

@Component({
  standalone: true,
  imports: [...components, RouterOutlet],
  templateUrl: './principal-template.component.html',
  styleUrl: './principal-template.component.scss'
})
export class PrincipalTemplateComponent {}
