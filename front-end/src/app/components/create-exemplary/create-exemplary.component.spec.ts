import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExemplaryComponent } from './create-exemplary.component';

describe('CreateExemplaryComponent', () => {
  let component: CreateExemplaryComponent;
  let fixture: ComponentFixture<CreateExemplaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExemplaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExemplaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
