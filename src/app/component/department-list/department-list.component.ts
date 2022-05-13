import { Component, OnInit } from '@angular/core';
import {Department} from '../../model/department';
import {DepartmentProviderService} from '../../service/department-provider.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html'
})

/**
 * Клас відповідає за компонент зі списком підрозділів
 */
export class DepartmentListComponent implements OnInit {
  /**
   * Зберігає дані підрозділів
   */
  departments: Department[];

  constructor(private departmentService: DepartmentProviderService) { }

  ngOnInit() {
    this.departmentService.findAll().subscribe(data => {
      this.departments = data;
    });
  }

}
