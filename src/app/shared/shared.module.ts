import { NgModule } from '@angular/core';
import { SharedModule as IuSharedModule, WallpaperModule } from '@caiu/library';

import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmailComponent } from './email/email.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  imports: [
    IuSharedModule,
    WallpaperModule,
  ],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    EmailComponent,
    MissionComponent,
  ],
  exports: [
    IuSharedModule,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    EmailComponent,
    MissionComponent,
    WallpaperModule,
  ]
})
export class SharedModule { }
