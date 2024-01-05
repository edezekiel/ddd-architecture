import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsUtilLibComponent } from './transactions-util-lib.component';

describe('TransactionsUtilLibComponent', () => {
  let component: TransactionsUtilLibComponent;
  let fixture: ComponentFixture<TransactionsUtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsUtilLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
