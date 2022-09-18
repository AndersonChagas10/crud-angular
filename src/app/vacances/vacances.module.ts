import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacancesRoutingModule } from './vacances-routing.module';
import { VacancesComponent } from './vacances/vacances.component';


@NgModule({
  declarations: [
    VacancesComponent
  ],
  imports: [
    CommonModule,
    VacancesRoutingModule
  ]
})
export class VacancesModule { }
