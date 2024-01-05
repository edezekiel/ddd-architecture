import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalAccountsFeatureTransferAccountLibComponent } from './staff-portal-accounts-feature-transfer-account-lib.component';

describe('StaffPortalAccountsFeatureTransferAccountLibComponent', () => {
  let component: StaffPortalAccountsFeatureTransferAccountLibComponent;
  let fixture: ComponentFixture<StaffPortalAccountsFeatureTransferAccountLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalAccountsFeatureTransferAccountLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StaffPortalAccountsFeatureTransferAccountLibComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
