import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloFormComponent } from './articolo-form.component';

describe('ArticoloFormComponent', () => {
  let component: ArticoloFormComponent;
  let fixture: ComponentFixture<ArticoloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticoloFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticoloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
