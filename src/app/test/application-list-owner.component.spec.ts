import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationListOwnerComponent } from '../component/application-list-owner/application-list-owner.component';

describe('ApplicationListOwnerComponent', () => {
  let component: ApplicationListOwnerComponent;
  let fixture: ComponentFixture<ApplicationListOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationListOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationListOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
