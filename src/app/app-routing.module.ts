import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './component/user-list/user-list.component';
import {ServiceListComponent} from './component/service-list/service-list.component';
import {DepartmentListComponent} from './component/department-list/department-list.component';
import {WorkerListComponent} from './component/worker-list/worker-list.component';
import {PositionListComponent} from './component/position-list/position-list.component';
import {ApplicationListAdminComponent} from './component/application-list-admin/application-list-admin.component';
import {ApplicationListOwnerComponent} from './component/application-list-owner/application-list-owner.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'workers', component: WorkerListComponent},
  { path: 'positions', component: PositionListComponent },
  { path: 'applicationsAdmin', component: ApplicationListAdminComponent },
  { path: 'applicationsOwner', component: ApplicationListOwnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
