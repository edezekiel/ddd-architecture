import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalAccountsDataLibComponent } from './staff-portal-accounts-data-lib.component';

describe('StaffPortalAccountsDataLibComponent', () => {
  let component: StaffPortalAccountsDataLibComponent;
  let fixture: ComponentFixture<StaffPortalAccountsDataLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalAccountsDataLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPortalAccountsDataLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
