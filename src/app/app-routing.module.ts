import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {ServiceListComponent} from './service-list/service-list.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'services', component: ServiceListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
