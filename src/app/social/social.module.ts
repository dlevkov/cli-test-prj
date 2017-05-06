import { ProfileItemResolver } from './profile-item-resolver';
import { ProfilesListResolver } from './profiles-list-resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { ProfilesListComponent } from './components/profiles-list.component';
import { MdListModule, MdCardModule, MaterialModule } from '@angular/material';
import { ProfileItemComponent } from './components/profile-item.component';
import { SocialService } from './social.service';
import { AddNewProfileComponent } from './components/add-new-profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    SocialRoutingModule,
    MdListModule,
    MdCardModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilesListComponent, ProfileItemComponent, AddNewProfileComponent],
  providers: [ProfilesListResolver, SocialService, ProfileItemResolver]
})
export class SocialModule { }
