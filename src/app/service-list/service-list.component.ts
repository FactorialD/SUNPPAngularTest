import { Component, OnInit } from '@angular/core';
import {Service} from '../model/service';
import {ServiceServiceService} from '../service/service-service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: Service[];

  constructor(private serviceService: ServiceServiceService) { }

  ngOnInit() {
    this.serviceService.findAll().subscribe(data => {
      this.services = data;
    });
  }
}
