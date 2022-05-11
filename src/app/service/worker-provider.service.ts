import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Worker} from '../model/worker';


@Injectable({
  providedIn: 'root'
})
export class WorkerProviderService {

  private workersUrl: string;

  constructor(private http: HttpClient) {
    this.workersUrl = 'http://localhost:8080/admin/worker/all';
  }

  public findAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workersUrl);
  }
}
