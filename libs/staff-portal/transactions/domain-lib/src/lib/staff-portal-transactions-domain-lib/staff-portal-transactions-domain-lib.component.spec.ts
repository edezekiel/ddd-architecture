import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalTransactionsDomainLibComponent } from './staff-portal-transactions-domain-lib.component';

describe('StaffPortalTransactionsDomainLibComponent', () => {
  let component: StaffPortalTransactionsDomainLibComponent;
  let fixture: ComponentFixture<StaffPortalTransactionsDomainLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalTransactionsDomainLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StaffPortalTransactionsDomainLibComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
