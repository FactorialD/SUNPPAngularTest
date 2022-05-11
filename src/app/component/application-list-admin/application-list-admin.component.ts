import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Application} from '../../model/application';
import {ApplicationProviderService} from '../../service/application-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';
import {formatDate} from '@angular/common';
import {UserProviderService} from '../../service/user-provider.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list-admin.component.html',
  styleUrls: ['./application-list-admin.component.css']
})
export class ApplicationListAdminComponent implements OnInit {
  applications: Application[];

  constructor(private applicationService: ApplicationProviderService,
              private currentUserService: SharedCurrentUserProviderService,
              private userService: UserProviderService,
              @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.applicationService.findAllForAdmin().subscribe(data => {
      this.applications = data;
    });
  }

  getFancyDate(date: Date): string {
    return formatDate(date, 'yyyy/MM/dd HH:mm:ss', this.locale);
  }

}
