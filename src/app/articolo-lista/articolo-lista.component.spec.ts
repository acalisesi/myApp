import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloListaComponent } from './articolo-lista.component';

describe('ArticoloListaComponent', () => {
  let component: ArticoloListaComponent;
  let fixture: ComponentFixture<ArticoloListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticoloListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticoloListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
