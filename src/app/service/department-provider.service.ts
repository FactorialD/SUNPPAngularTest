import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../model/department';

@Injectable({
  providedIn: 'root'
})

/**
 * Сервіс, що працює з даними підрозділів
 */
export class DepartmentProviderService {

  /**
   * Url для отримання всіх підрозділів
   */
  private departmentsUrl: string;

  constructor(private http: HttpClient) {
    this.departmentsUrl = 'http://localhost:8080/admin/department/all';
  }

  /**
   * Повертає всі підрозділи
   */
  public findAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl);
  }

}
