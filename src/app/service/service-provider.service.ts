import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Service} from '../model/service';

@Injectable({
  providedIn: 'root'
})

/**
 * Сервіс, що працює з даними сервісів
 */
export class ServiceProviderService {

  /**
   * Url для отримання всіх сервісів
   */
  private servicesUrl: string;

  constructor(private http: HttpClient) {
    this.servicesUrl = 'http://localhost:8080/service/all';
  }

  /**
   * Повертає всі сервіси
   */
  public findAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl);
  }
}
