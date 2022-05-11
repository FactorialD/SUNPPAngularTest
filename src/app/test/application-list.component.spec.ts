import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationListAdminComponent } from '../component/application-list-admin/application-list-admin.component';

describe('ApplicationListComponent', () => {
  let component: ApplicationListAdminComponent;
  let fixture: ComponentFixture<ApplicationListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
