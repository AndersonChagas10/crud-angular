import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'vacances', pathMatch: 'full' },
  { path: 'vacances', loadChildren: () => import('./vacances/vacances.module').then(m => m.VacancesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
