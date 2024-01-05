import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDomainLibComponent } from './shared-domain-lib.component';

describe('SharedDomainLibComponent', () => {
  let component: SharedDomainLibComponent;
  let fixture: ComponentFixture<SharedDomainLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDomainLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDomainLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
