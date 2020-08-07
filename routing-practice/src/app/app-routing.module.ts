import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full' }, // pathMatch can also be prefix
  {path: 'home', component: HomeComponent },
  {
    path: 'settings',  
    component: SettingsComponent, 
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full' },
      {path: 'profile', component: SettingsProfileComponent},
      {path: 'contact', component: SettingsContactComponent},
      {path: '**',  redirectTo: 'profile', pathMatch: 'full'}, // ** redirect to settings/profile everytime knows that it is at the child level
    ]
  },
  {path: '**',  component: PageNotFoundComponent }, // ** are wildcards, means matching everything
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
