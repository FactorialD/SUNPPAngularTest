import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class PositionProviderService {

  private positionsUrl: string;

  constructor(private http: HttpClient) {
    this.positionsUrl = 'http://localhost:8080/admin/position/all';
  }

  public findAll(): Observable<Position[]> {
    return this.http.get<Position[]>(this.positionsUrl);
  }
}
