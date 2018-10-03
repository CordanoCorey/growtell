import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
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
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    LibraryModule,
    IuSharedModule,
    WallpaperModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [
    AddressComponent,
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
    AddressComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    EmailComponent,
    MissionComponent,
    SocialIconsComponent,
    TeamMemberComponent,
    TestimonialComponent,
    WallpaperModule,
    MatChipsModule,
  ],
  entryComponents: [
    EmailComponent,
  ]
})
export class SharedModule { }
