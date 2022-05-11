import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../model/user';
import {Service} from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  private servicesUrl: string;

  constructor(private http: HttpClient) {
    this.servicesUrl = 'http://localhost:8080/service/all';
  }

  public findAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl);
  }
}
