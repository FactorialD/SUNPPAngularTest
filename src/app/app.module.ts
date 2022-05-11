import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './component/service-list/service-list.component';
import { UserListComponent } from './component/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserProviderService} from './service/user-provider.service';
import {ServiceProviderService} from './service/service-provider.service';
import { CurrentUserComponent } from './component/current-user/current-user.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import {SharedCurrentUserProviderService} from './service/shared-current-user-provider.service';
import { WorkerListComponent } from './component/worker-list/worker-list.component';
import { PositionListComponent } from './component/position-list/position-list.component';
import { ApplicationListAdminComponent } from './component/application-list-admin/application-list-admin.component';
import {ApplicationProviderService} from './service/application-provider.service';
import {NgbModalBackdrop} from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ApplicationListOwnerComponent } from './component/application-list-owner/application-list-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    UserListComponent,
    CurrentUserComponent,
    DepartmentListComponent,
    WorkerListComponent,
    PositionListComponent,
    ApplicationListAdminComponent,
    ApplicationListOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [UserProviderService,
    ServiceProviderService,
    UserProviderService,
    SharedCurrentUserProviderService,
    ApplicationProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
