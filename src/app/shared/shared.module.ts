import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { LibraryModule, SharedModule as IuSharedModule, WallpaperModule } from '@caiu/library';

import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmailComponent } from './email/email.component';
import { MissionComponent } from './mission/mission.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  imports: [
    LibraryModule,
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
    TeamMemberComponent,
    TestimonialComponent,
  ],
  exports: [
    LibraryModule,
    IuSharedModule,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    EmailComponent,
    MissionComponent,
    SocialIconsComponent,
    TeamMemberComponent,
    TestimonialComponent,
    WallpaperModule,
  ]
})
export class SharedModule { }
