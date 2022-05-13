import { Component, OnInit } from '@angular/core';
import {Worker} from '../../model/worker';
import {WorkerProviderService} from '../../service/worker-provider.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html'
})

/**
 * Клас відповідає за компонент зі списком робітників
 */
export class WorkerListComponent implements OnInit {

  /**
   * Список всіх робітників
   */
  workers: Worker[];

  constructor(private workerService: WorkerProviderService) { }

  ngOnInit() {
    this.workerService.findAll().subscribe(data => {
      this.workers = data;
    });
  }

}
