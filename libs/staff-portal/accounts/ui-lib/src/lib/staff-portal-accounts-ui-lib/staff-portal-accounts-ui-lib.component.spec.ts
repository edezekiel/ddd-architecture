import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalAccountsUiLibComponent } from './staff-portal-accounts-ui-lib.component';

describe('StaffPortalAccountsUiLibComponent', () => {
  let component: StaffPortalAccountsUiLibComponent;
  let fixture: ComponentFixture<StaffPortalAccountsUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalAccountsUiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPortalAccountsUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
