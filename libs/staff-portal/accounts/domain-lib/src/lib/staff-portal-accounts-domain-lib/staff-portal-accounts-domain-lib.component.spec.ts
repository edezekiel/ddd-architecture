import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffPortalAccountsDomainLibComponent } from './staff-portal-accounts-domain-lib.component';

describe('StaffPortalAccountsDomainLibComponent', () => {
  let component: StaffPortalAccountsDomainLibComponent;
  let fixture: ComponentFixture<StaffPortalAccountsDomainLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPortalAccountsDomainLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPortalAccountsDomainLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
