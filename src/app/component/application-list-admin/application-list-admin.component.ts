import {ChangeDetectorRef, Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Application} from '../../model/application';
import {ApplicationProviderService} from '../../service/application-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';
import {UserProviderService} from '../../service/user-provider.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list-admin.component.html'
})

/**
 * Клас відповідає за компонент зі списком заявок для адміна
 */
export class ApplicationListAdminComponent implements OnInit {

  /**
   * Заявки адміністратора
   */
  applications: Application[];

  constructor(private applicationService: ApplicationProviderService,
              private currentUserService: SharedCurrentUserProviderService,
              private userService: UserProviderService,
              private modalService: NgbModal,
              private changeDetectorService: ChangeDetectorRef,
              @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.applicationService.findAllForAdmin().subscribe(data => {
      this.applications = data;
    });
    this.applicationService.applicationAdminChangeObservable.subscribe(data => {
      // обновлення компоненту при зміні даних заявок
      this.ngOnInit();
    });
  }

  /**
   * Відкриває вспливаюче вікно для підтвердження/відхилення заявки
   * @param applicationVerdictContent контент блоку вспливаючого вікна
   */
  openApplicationAcceptOrDismissModal(applicationVerdictContent) {
    this.modalService.open(applicationVerdictContent, {ariaLabelledBy: 'modal-basic-title'});
  }
}
