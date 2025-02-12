import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // ✅ Redirige correctamente a "home"
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: '**', redirectTo: 'home' } // ✅ Rutas desconocidas van a "home"
];
