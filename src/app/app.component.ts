import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPageComponent } from "./pages/header-page/header-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-system-frontend';
}
