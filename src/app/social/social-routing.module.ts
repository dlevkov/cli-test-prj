import { ProfileItemResolver } from './profile-item-resolver';
import { ProfilesListResolver } from './profiles-list-resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesListComponent } from 'app/social/components/profiles-list.component';
import { ProfileItemComponent } from 'app/social/components/profile-item.component';
import { AddNewProfileComponent } from 'app/social/components/add-new-profile.component';

const routes: Routes = [
  { path: 'profiles', component: ProfilesListComponent, resolve: { items: ProfilesListResolver } },
  { path: 'profile/:id', component: ProfileItemComponent, resolve: { item: ProfileItemResolver } },
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'addUser', component: AddNewProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
