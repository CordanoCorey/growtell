import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OccupationalTherapyComponent } from './occupational-therapy.component';

const routes: Routes = [{
  path: '',
  component: OccupationalTherapyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccupationalTherapyRoutingModule { }
