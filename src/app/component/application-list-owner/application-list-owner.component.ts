import {ChangeDetectorRef, Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {ApplicationProviderService} from '../../service/application-provider.service';
import {SharedCurrentUserProviderService} from '../../service/shared-current-user-provider.service';
import {Application} from '../../model/application';
import {UserProviderService} from '../../service/user-provider.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-application-list-owner',
  templateUrl: './application-list-owner.component.html'
})

/**
 * Клас відповідає за компонент зі списком заявок для власника
 */
export class ApplicationListOwnerComponent implements OnInit {

  /**
   * Заявки власника
   */
  applications: Application[];

  constructor(private applicationService: ApplicationProviderService,
              private currentUserService: SharedCurrentUserProviderService,
              private userService: UserProviderService,
              private modalService: NgbModal,
              private changeDetectorService: ChangeDetectorRef,
              @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.applicationService.findAllForOwner().subscribe(data => {
      this.applications = data;
    });
    this.applicationService.applicationOwnerChangeObservable.subscribe(data => {
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
