import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { WeatherApiComponent } from './components/weather-api/weather-api.component';
import { GithubApiComponent } from './components/github-api/github-api.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {path:'heroes', component:HeroesComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'detail/:id', component:HeroDetailComponent},
  {path:'weather-api', component:WeatherApiComponent},
  {path:'github-api', component:GithubApiComponent},
  {path:'forms', component:FormsComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
