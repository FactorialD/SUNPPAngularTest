import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {ApplicationProviderService} from '../../service/application-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';
import {Application} from '../../model/application';
import {formatDate} from '@angular/common';
import {UserProviderService} from '../../service/user-provider.service';

@Component({
  selector: 'app-application-list-owner',
  templateUrl: './application-list-owner.component.html',
  styleUrls: ['./application-list-owner.component.css']
})
export class ApplicationListOwnerComponent implements OnInit {

  applications: Application[];

  constructor(private applicationService: ApplicationProviderService,
              private currentUserService: SharedCurrentUserProviderService,
              private userService: UserProviderService,
              @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.applicationService.findAllForOwner().subscribe(data => {
      this.applications = data;
    });
  }

  getFancyDate(date: Date): string {
    return formatDate(date, 'yyyy/MM/dd HH:mm:ss', this.locale);
  }


}
