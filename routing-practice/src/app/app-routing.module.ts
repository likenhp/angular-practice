import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full' }, // pathMatch can also be prefix
  {path: 'home', component: HomeComponent },
  {path: 'settings',  component: SettingsComponent },
  {path: '**',  component: PageNotFoundComponent }, // ** are wildcards, means matching everything
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
