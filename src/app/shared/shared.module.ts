import { NgModule } from '@angular/core';
import { SharedModule as IuSharedModule } from '@caiu/library';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmailComponent } from './email/email.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  imports: [
    IuSharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    EmailComponent,
    MissionComponent,
  ],
  exports: [
    IuSharedModule,
    HeaderComponent,
    FooterComponent,
    EmailComponent,
    MissionComponent,
  ]
})
export class SharedModule { }
