import { Component, OnInit } from '@angular/core';
import {Service} from '../../model/service';
import {ServiceProviderService} from '../../service/service-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';
import {DepartmentProviderService} from '../../service/department-provider.service';
import {Department} from '../../model/department';
import {ApplicationProviderService} from '../../service/application-provider.service';
import {Role} from '../../model/role';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html'
})

/**
 * Клас відповідає за компонент зі списком сервісів
 */
export class ServiceListComponent implements OnInit {

  /**
   * Зберігає сервіси
   */
  services: Service[];

  /**
   * Зберігає підрозділи
   */
  departments: Department[];

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
  }

  /**
   * Викликає метод сервісу, щоб створити нову заявку
   * @param event подія
   * @param content контент блоку вспливаючого вікна
   * @param service сервіс для заявки
   * @param role роль для заявки
   * @param departmentId опціональний підрозділ для заявки
   * @param note опціональний коментар для заявки
   */
  addNewApplication(event, content, service: Service, role: Role, departmentId: string | null, note: string | null) {
    this.applicationService.createNewApplication(service.id, role.id, departmentId, note, content);
  }



}
