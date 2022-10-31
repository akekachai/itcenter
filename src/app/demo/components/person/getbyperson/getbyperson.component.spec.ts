import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbypersonComponent } from './getbyperson.component';

describe('GetbypersonComponent', () => {
  let component: GetbypersonComponent;
  let fixture: ComponentFixture<GetbypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbypersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetbypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
