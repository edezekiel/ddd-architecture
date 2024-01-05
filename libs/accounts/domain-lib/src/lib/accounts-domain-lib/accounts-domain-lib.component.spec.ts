import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsDomainLibComponent } from './accounts-domain-lib.component';

describe('AccountsDomainLibComponent', () => {
  let component: AccountsDomainLibComponent;
  let fixture: ComponentFixture<AccountsDomainLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsDomainLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsDomainLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
