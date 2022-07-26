import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRenewComponent } from './create-renew.component';

describe('CreateRenewComponent', () => {
  let component: CreateRenewComponent;
  let fixture: ComponentFixture<CreateRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
