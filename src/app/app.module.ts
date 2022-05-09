import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserServiceService} from './service/user-service.service';
import {ServiceService} from './service/service.service';
import { CurrentUserComponent } from './current-user/current-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    UserListComponent,
    CurrentUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
