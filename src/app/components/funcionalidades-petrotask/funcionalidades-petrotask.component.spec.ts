import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadesPetrotaskComponent } from './funcionalidades-petrotask.component';

describe('FuncionalidadesPetrotaskComponent', () => {
  let component: FuncionalidadesPetrotaskComponent;
  let fixture: ComponentFixture<FuncionalidadesPetrotaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionalidadesPetrotaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionalidadesPetrotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
