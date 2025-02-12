import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // ✅ Importar RouterModule
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, RouterOutlet, RouterModule], // ✅ Importar RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-angular-app';
}
