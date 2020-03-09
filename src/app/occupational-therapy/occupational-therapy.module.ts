import { NgModule } from '@angular/core';

import { OccupationalTherapyRoutingModule } from './occupational-therapy-routing.module';
import { OccupationalTherapyComponent } from './occupational-therapy.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OccupationalTherapyRoutingModule
  ],
  declarations: [OccupationalTherapyComponent]
})
export class OccupationalTherapyModule { }
