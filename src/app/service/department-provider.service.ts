import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from '../model/service';
import {Department} from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentProviderService {

  private departmentsUrl: string;

  constructor(private http: HttpClient) {
    this.departmentsUrl = 'http://localhost:8080/admin/department/all';
  }

  public findAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl);
  }

}
