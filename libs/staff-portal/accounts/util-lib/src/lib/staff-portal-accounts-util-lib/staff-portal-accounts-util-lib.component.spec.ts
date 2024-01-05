import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalAccountsUtilLibComponent } from './staff-portal-accounts-util-lib.component';

describe('StaffPortalAccountsUtilLibComponent', () => {
  let component: StaffPortalAccountsUtilLibComponent;
  let fixture: ComponentFixture<StaffPortalAccountsUtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalAccountsUtilLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPortalAccountsUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
