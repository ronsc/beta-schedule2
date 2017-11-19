import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePlanComponent } from './containers/create-plan.component';

const routes: Routes = [
  {
    path: 'create-plan',
    component: CreatePlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
