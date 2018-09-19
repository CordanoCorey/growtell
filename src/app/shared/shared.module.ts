import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { SharedModule as IuSharedModule, WallpaperModule } from '@caiu/library';

import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmailComponent } from './email/email.component';
import { MissionComponent } from './mission/mission.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  imports: [
    IuSharedModule,
    WallpaperModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    EmailComponent,
    MissionComponent,
    NavbarComponent,
    SidenavComponent,
    SocialIconsComponent,
  ],
  exports: [
    IuSharedModule,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    EmailComponent,
    MissionComponent,
    SocialIconsComponent,
    WallpaperModule,
  ]
})
export class SharedModule { }
