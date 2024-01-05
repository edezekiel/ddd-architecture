import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsSmartComponentsLibComponent } from './transactions-smart-components-lib.component';

describe('TransactionsSmartComponentsLibComponent', () => {
  let component: TransactionsSmartComponentsLibComponent;
  let fixture: ComponentFixture<TransactionsSmartComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsSmartComponentsLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsSmartComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
