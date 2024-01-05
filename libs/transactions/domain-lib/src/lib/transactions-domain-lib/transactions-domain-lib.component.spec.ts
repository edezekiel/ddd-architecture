import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsDomainLibComponent } from './transactions-domain-lib.component';

describe('TransactionsDomainLibComponent', () => {
  let component: TransactionsDomainLibComponent;
  let fixture: ComponentFixture<TransactionsDomainLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsDomainLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsDomainLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
