import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.css'
})
export class HeaderPageComponent {
  public home: string = "Home";
  public isActive: boolean = false;
}
