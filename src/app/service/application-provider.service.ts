import {Injectable, TemplateRef} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Application} from '../model/application';
import {SharedCurrentUserProviderService} from './shared-current-user-provider.service';
import {ApplicationChecking} from '../model/application-checking';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})

/**
 * Сервіс, що працює з даними заявок
 */
export class ApplicationProviderService {

  /**
   * Url для отримання всіх заявок адміна
   */
  private applicationsAdminUrl: string;

  /**
   * Url для отримання всіх заявок власника
   */
  private applicationsOwnerUrl: string;

  /**
   * Url для створення нової заявки
   */
  private newApplicationUrl: string;

  /**
   * Url для прийняття заявки власником
   */
  private applicationAcceptOwnerUrl: string;

  /**
   * Url для прийняття заявки адміном
   */
  private applicationAcceptAdminUrl: string;

  /**
   * Url для відхилення заявки власником
   */
  private applicationDeclineOwnerUrl: string;

  /**
   * Url для відхилення заявки адміном
   */
  private applicationDeclineAdminUrl: string;

  /**
   * Зберігає дані про прийняття/відхилення адміном заявки
   * Нижче - аналог для обсервування
   */
  private applicationAdminChangeSource = new Subject<any>();
  applicationAdminChangeObservable = this.applicationAdminChangeSource.asObservable();

  /**
   * Зберігає дані про прийняття/відхилення власником заявки
   * Нижче - аналог для обсервування
   */
  private applicationOwnerChangeSource = new Subject<any>();
  applicationOwnerChangeObservable = this.applicationOwnerChangeSource.asObservable();

  constructor(private http: HttpClient,
              private currentUserService: SharedCurrentUserProviderService,
              private modalService: NgbModal) {

    this.applicationsAdminUrl = 'http://localhost:8080/admin/{admin_id}/application/all/service/all';
    this.applicationsOwnerUrl = 'http://localhost:8080/owner/{owner_id}/application/all/service/all';

    this.newApplicationUrl = 'http://localhost:8080/user/{user_id}/application/create/{service_id}/{role_id}/';

    this.applicationAcceptOwnerUrl = 'http://localhost:8080/owner/{owner_id}/application/{id}/accept';
    this.applicationAcceptAdminUrl = 'http://localhost:8080/admin/{admin_id}/application/{id}/accept';

    this.applicationDeclineOwnerUrl = 'http://localhost:8080/owner/{owner_id}/application/{id}/decline';
    this.applicationDeclineAdminUrl = 'http://localhost:8080/admin/{admin_id}/application/{id}/decline';
  }

  /**
   * Повертає всі заявки для адміна
   */
  public findAllForAdmin(): Observable<Application[]> {
    const currentUser = this.currentUserService.getCurrentUser();
    const finalUrl = this.applicationsAdminUrl.replace('{admin_id}', currentUser !== null ? currentUser.id : 'null');
    return this.http.get<Application[]>(finalUrl);
  }

  /**
   * Повертає всі заявки для власника
   */
  public findAllForOwner(): Observable<Application[]> {
    const currentUser = this.currentUserService.getCurrentUser();
    const finalUrl = this.applicationsOwnerUrl.replace('{owner_id}', currentUser !== null ? currentUser.id : 'null');
    return this.http.get<Application[]>(finalUrl);
  }

  /**
   * Створює нову заявку
   * @param serviceId ідентифікатор заявки
   * @param roleid ідентифікатор ролі
   * @param departmentId ідентифікатор підрозділу
   * @param note коментар заявляча (опціонально)
   * @param modalContent блок вспливаючого вікна
   */
  public createNewApplication(serviceId: string,
                              roleid: string,
                              departmentId: string | null,
                              note: string | null,
                              modalContent) {

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
      // після отримання запиту відкриваємо вспливаюче вікно
      this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title'});
    });
  }

  /**
   * Власник приймає заявку
   * @param $event подія
   * @param modalContent блок вспливаючого вікна
   * @param application заявка, що приймається
   * @param note коментар власника (опціонально)
   */
  acceptApplicationAsOwner($event: MouseEvent,
                           modalContent: TemplateRef<any>,
                           application: Application,
                           note: string | null) {
    const finalUrl = this.applicationAcceptOwnerUrl
      .replace('{owner_id}',
        this.currentUserService.getCurrentUser() !== null ? this.currentUserService.getCurrentUser().id : 'null')
      .replace('{id}', application.id);

    let queryParams = new HttpParams();
    if (note !== null && note !== '' && note !== 'null') {
      queryParams = queryParams.append('note', note);
    }

    this.http.get<Application>(finalUrl, {params: queryParams}).subscribe(data => {
      // після отримання запиту відкриваємо вспливаюче вікно
      this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title'});
    });
    // Оновлюємо компонент
    this.refreshOwnerComponent('Owner accepted application');
  }

  /**
   * Власник відхилює заявку
   * @param $event подія
   * @param modalContent блок вспливаючого вікна
   * @param application заявка, що відхилюється
   * @param note коментар власника (опціонально)
   */
  declineApplicationAsOwner($event: MouseEvent,
                            modalContent: TemplateRef<any>,
                            application: Application,
                            note: string | null) {
    const finalUrl = this.applicationDeclineOwnerUrl
      .replace('{owner_id}',
        this.currentUserService.getCurrentUser() !== null ? this.currentUserService.getCurrentUser().id : 'null')
      .replace('{id}', application.id);

    let queryParams = new HttpParams();
    if (note !== null && note !== '' && note !== 'null') {
      queryParams = queryParams.append('note', note);
    }

    this.http.get<Application>(finalUrl, {params: queryParams}).subscribe(data => {
      // після отримання запиту відкриваємо вспливаюче вікно
      this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title'});
    });
    // Оновлюємо компонент
    this.refreshOwnerComponent('Owner declined application');
  }

  /**
   * Адмін приймає заявку
   * @param $event подія
   * @param applyMessageContent блок вспливаючого вікна
   * @param application заявка, що приймається
   * @param note коментар адміна (опціонально)
   */
  acceptApplicationAsAdmin($event: MouseEvent,
                           applyMessageContent: TemplateRef<any>,
                           application: Application,
                           note: string) {
    const finalUrl = this.applicationAcceptAdminUrl
      .replace('{admin_id}',
        this.currentUserService.getCurrentUser() !== null ? this.currentUserService.getCurrentUser().id : 'null')
      .replace('{id}', application.id);

    let queryParams = new HttpParams();
    if (note !== null && note !== '' && note !== 'null') {
      queryParams = queryParams.append('note', note);
    }

    this.http.get<Application>(finalUrl, {params: queryParams}).subscribe(data => {
      // після отримання запиту відкриваємо вспливаюче вікно
      this.modalService.open(applyMessageContent, {ariaLabelledBy: 'modal-basic-title'});
    });
    // Оновлюємо компонент
    this.refreshAdminComponent('Admin accepted application');
  }

  /**
   * Адмін відхилює заявку
   * @param $event подія
   * @param declineMessageContent блок вспливаючого вікна
   * @param application заявка, що відхилюється
   * @param note коментар адміна (опціонально)
   */
  declineApplicationAsAdmin($event: MouseEvent,
                            declineMessageContent: TemplateRef<any>,
                            application: Application,
                            note: string) {
    const finalUrl = this.applicationDeclineAdminUrl
      .replace('{admin_id}',
        this.currentUserService.getCurrentUser() !== null ? this.currentUserService.getCurrentUser().id : 'null')
      .replace('{id}', application.id);

    let queryParams = new HttpParams();
    if (note !== null && note !== '' && note !== 'null') {
      queryParams = queryParams.append('note', note);
    }

    this.http.get<Application>(finalUrl, {params: queryParams}).subscribe(data => {
      // після отримання запиту відкриваємо вспливаюче вікно
      this.modalService.open(declineMessageContent, {ariaLabelledBy: 'modal-basic-title'});
    });
    // Оновлюємо компонент
    this.refreshAdminComponent('Admin declined application');
  }

  /**
   * Поновлює змінну, що відповідає за оновлення компоненту списку заявок адміна
   * @param changes строка, що описує зміни
   */
  refreshAdminComponent(changes: string) {
    this.applicationAdminChangeSource.next(changes);
  }

  /**
   * Поновлює змінну, що відповідає за оновлення компоненту списку заявок власника
   * @param changes строка, що описує зміни
   */
  refreshOwnerComponent(changes: string) {
    this.applicationOwnerChangeSource.next(changes);
  }

  /**
   * Повертає істину, якщо запис перевірки це запис користувача
   * @param check запис перевірки
   */
  isUserCheck(check: ApplicationChecking): boolean {
    if (check.checkType.name === 'USER_APPLICATION_RECORD') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Повертає істину, якщо запис перевірки це запис власника
   * @param check запис перевірки
   */
  isOwnerCheck(check: ApplicationChecking): boolean {
    if (check.checkType.name === 'CHECKING_RECORD' &&
      check.role.name === 'Власник') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Повертає істину, якщо запис перевірки це запис адміна
   * @param check запис перевірки
   */
  isAdminCheck(check: ApplicationChecking): boolean {
    if (check.checkType.name === 'CHECKING_RECORD' &&
      check.role.name === 'Адміністратор') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Повертає запис перевірки користувача
   * @param application заявка, з якої буде вибиратися перевірка
   */
  getUserCheck(application: Application): ApplicationChecking {
    for (const check of application.checkings) {
      if (this.isUserCheck(check)) {
        return check;
      }
    }
  }

  /**
   * Повертає запис перевірки власника
   * @param application заявка, з якої буде вибиратися перевірка
   */
  getOwnerCheck(application: Application): ApplicationChecking {
    for (const check of application.checkings) {
      if (this.isOwnerCheck(check)) {
        return check;
      }
    }
  }

  /**
   * Повертає запис перевірки адміна
   * @param application заявка, з якої буде вибиратися перевірка
   */
  getAdminCheck(application: Application): ApplicationChecking {
    for (const check of application.checkings) {
      if (this.isAdminCheck(check)) {
        return check;
      }
    }
  }

  /**
   * Повертає красиво відформатовану дату і час
   * @param date дата, яка буде відформатована
   * @param locale локаль
   */
  getFancyDate(date: Date, locale): string {
    return formatDate(date, 'yyyy/MM/dd HH:mm:ss', locale);
  }

}
