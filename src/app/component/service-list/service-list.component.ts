import { Component, OnInit } from '@angular/core';
import {Service} from '../../model/service';
import {ServiceProviderService} from '../../service/service-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';
import {DepartmentProviderService} from '../../service/department-provider.service';
import {Department} from '../../model/department';
import {ApplicationProviderService} from '../../service/application-provider.service';
import {User} from '../../model/user';
import {Role} from '../../model/role';
import {Application} from '../../model/application';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: Service[];
  departments: Department[];
  lastApplication: Application;

  constructor(private serviceService: ServiceProviderService,
              private currentUser: SharedCurrentUserProviderService,
              private departmentService: DepartmentProviderService,
              private applicationService: ApplicationProviderService) { }

  ngOnInit() {
    this.serviceService.findAll().subscribe(data => {
      this.services = data;
    });
    this.departmentService.findAll().subscribe(data => {
      this.departments = data;
    });
    console.log(this.lastApplication);
  }

  addNewApplication(event, content, service: Service, role: Role, departmentId: string | null, note: string | null, i: number, j: number) {
    this.applicationService.createNewApplication(service.id, role.id, departmentId, note, content);
  }



}
