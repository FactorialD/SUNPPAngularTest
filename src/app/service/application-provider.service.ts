import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Application} from '../model/application';
import {SharedCurrentUserProviderService} from './shared-current-user-provider.service';
import {ApplicationChecking} from '../model/application-checking';
import {Service} from '../model/service';
import {Role} from '../model/role';
import {publish} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ApplicationProviderService {

  private applicationsAdminUrl: string;
  private applicationsOwnerUrl: string;
  private newApplicationUrl: string;
  private userApplicationsUrl: string;
  private applicationAcceptOwnerUrl: string;
  private applicationAcceptAdminUrl: string;

  constructor(private http: HttpClient,
              private currentUserService: SharedCurrentUserProviderService,
              private modalService: NgbModal) {
    this.applicationsAdminUrl = 'http://localhost:8080/admin/{admin_id}/application/all/service/all';
    this.applicationsOwnerUrl = 'http://localhost:8080/owner/{owner_id}/application/all/service/all';
    this.newApplicationUrl = 'http://localhost:8080/user/{user_id}/application/create/{service_id}/{role_id}/';
    this.userApplicationsUrl = 'http://localhost:8080/user/{user_id}/application/all';
    this.applicationAcceptOwnerUrl = 'http://localhost:8080/owner/{owner_id}/application/{id}/accept';
    this.applicationAcceptAdminUrl = 'http://localhost:8080/admin/{admin_id}/application/{id}/accept';
  }

  public findAllForAdmin(): Observable<Application[]> {
    const currentUser = this.currentUserService.getCurrentUser();
    const finalUrl = this.applicationsAdminUrl.replace('{admin_id}', currentUser !== null ? currentUser.id : 'null');
    return this.http.get<Application[]>(finalUrl);
  }

  public findAllForOwner(): Observable<Application[]> {
    const currentUser = this.currentUserService.getCurrentUser();
    const finalUrl = this.applicationsOwnerUrl.replace('{owner_id}', currentUser !== null ? currentUser.id : 'null');
    return this.http.get<Application[]>(finalUrl);
  }

  public createNewApplication(serviceId: string, roleid: string, departmentId: string | null, note: string | null, modalContent) {

    const finalUrl = this.newApplicationUrl
      .replace('{user_id}',
      this.currentUserService.getCurrentUser() !== null ? this.currentUserService.getCurrentUser().id : 'null')
      .replace('{service_id}', serviceId)
      .replace('{role_id}', roleid);

    let queryParams = new HttpParams();
    if (departmentId !== null && departmentId !== '' && departmentId !== 'null') {
      queryParams = queryParams.append('department_id', departmentId);
    }
    if (note !== null && note !== '' && note !== 'null') {
      queryParams = queryParams.append('note', note);
    }

    this.http.get<Application>(finalUrl, {params: queryParams}).subscribe(data => {
      this.currentUserService.setLastApplication(data);
      this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title'});
    });
  }

  acceptApplicationAsOwner($event: MouseEvent, modalContent, application: Application, note: string | null) {
    const finalUrl = this.newApplicationUrl
      .replace('{owner_id}',
        this.currentUserService.getCurrentUser() !== null ? this.currentUserService.getCurrentUser().id : 'null')
      .replace('{id}', application.id);

    let queryParams = new HttpParams();
    if (note !== null && note !== '' && note !== 'null') {
      queryParams = queryParams.append('note', note);
    }

    this.http.get<Application>(finalUrl, {params: queryParams}).subscribe(data => {
      this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title'});
    });
  }

  // public getAllApplications(user: User): Observable<Application[]> {
  //
  //   const finalUrl = this.userApplicationsUrl
  //     .replace('{user_id}',
  //       this.currentUserService.getCurrentUser() !== null ? this.currentUserService.getCurrentUser().id : 'null');
  //
  //   return this.http.get<Application[]>(finalUrl);
  // }

  // public isApplicationOfThisServiceAndRole(service:) {
  //
  // }

  isUserCheck(check: ApplicationChecking): boolean {
    if (check.checkType.name === 'USER_APPLICATION_RECORD') {
      return true;
    } else {
      return false;
    }
  }

  isOwnerCheck(check: ApplicationChecking): boolean {
    if (check.checkType.name === 'CHECKING_RECORD' &&
      check.role.name === 'Власник') {
      return true;
    } else {
      return false;
    }
  }

  isAdminCheck(check: ApplicationChecking): boolean {
    if (check.checkType.name === 'CHECKING_RECORD' &&
      check.role.name === 'Адміністратор') {
      return true;
    } else {
      return false;
    }
  }

  getUserCheck(applicaton: Application): ApplicationChecking {
    for (const check of applicaton.checkings) {
      if (this.isUserCheck(check)) {
        return check;
      }
    }
  }

  getOwnerCheck(applicaton: Application): ApplicationChecking {
    for (const check of applicaton.checkings) {
      if (this.isOwnerCheck(check)) {
        return check;
      }
    }
  }

  getAdminCheck(applicaton: Application): ApplicationChecking {
    for (const check of applicaton.checkings) {
      if (this.isAdminCheck(check)) {
        return check;
      }
    }
  }

}
