import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarNotasComponent } from './components/cargar-notas/cargar-notas.component';
import { VerNotasComponent } from './components/ver-notas/ver-notas.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  // { path: '', component: AppComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cargar-notas', component: CargarNotasComponent },
  { path: 'ver-notas', component: VerNotasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }