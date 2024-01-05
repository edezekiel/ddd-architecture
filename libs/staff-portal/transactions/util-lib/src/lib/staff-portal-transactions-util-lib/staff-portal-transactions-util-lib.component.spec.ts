import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalTransactionsUtilLibComponent } from './staff-portal-transactions-util-lib.component';

describe('StaffPortalTransactionsUtilLibComponent', () => {
  let component: StaffPortalTransactionsUtilLibComponent;
  let fixture: ComponentFixture<StaffPortalTransactionsUtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalTransactionsUtilLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPortalTransactionsUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
