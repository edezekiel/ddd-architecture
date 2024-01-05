import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalTransactionsDataLibComponent } from './staff-portal-transactions-data-lib.component';

describe('StaffPortalTransactionsDataLibComponent', () => {
  let component: StaffPortalTransactionsDataLibComponent;
  let fixture: ComponentFixture<StaffPortalTransactionsDataLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalTransactionsDataLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPortalTransactionsDataLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
