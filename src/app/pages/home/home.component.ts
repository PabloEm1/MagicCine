import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component'; // ✅ Importa el slider

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [SliderComponent], // ✅ IMPORTA el SliderComponent aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
