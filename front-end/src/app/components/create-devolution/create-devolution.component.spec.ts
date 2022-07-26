import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDevolutionComponent } from './create-devolution.component';

describe('CreateDevolutionComponent', () => {
  let component: CreateDevolutionComponent;
  let fixture: ComponentFixture<CreateDevolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDevolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
