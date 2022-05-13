import { Component, OnInit } from '@angular/core';
import {Position} from '../../model/position';
import {PositionProviderService} from '../../service/position-provider.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html'
})

/**
 * Клас відповідає за компонент зі списком посад
 */
export class PositionListComponent implements OnInit {

  /**
   * Зберігає дані посад
   */
  positions: Position[];

  constructor(private positionService: PositionProviderService) { }

  ngOnInit() {
    this.positionService.findAll().subscribe(data => {
      this.positions = data;
    });
  }

}
