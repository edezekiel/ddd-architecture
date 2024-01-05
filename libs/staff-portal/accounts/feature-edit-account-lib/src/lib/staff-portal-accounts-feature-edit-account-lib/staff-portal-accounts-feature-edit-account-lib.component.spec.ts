import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalAccountsFeatureEditAccountLibComponent } from './staff-portal-accounts-feature-edit-account-lib.component';

describe('StaffPortalAccountsFeatureEditAccountLibComponent', () => {
  let component: StaffPortalAccountsFeatureEditAccountLibComponent;
  let fixture: ComponentFixture<StaffPortalAccountsFeatureEditAccountLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalAccountsFeatureEditAccountLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StaffPortalAccountsFeatureEditAccountLibComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
