import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssociateComponent } from './create-associate.component';

describe('CreateAssociateComponent', () => {
  let component: CreateAssociateComponent;
  let fixture: ComponentFixture<CreateAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
