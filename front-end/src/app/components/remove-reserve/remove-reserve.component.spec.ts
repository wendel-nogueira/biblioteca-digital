import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveReserveComponent } from './remove-reserve.component';

describe('RemoveReserveComponent', () => {
  let component: RemoveReserveComponent;
  let fixture: ComponentFixture<RemoveReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveReserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
