import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerclientesPage } from './verclientes.page';

describe('VerclientesPage', () => {
  let component: VerclientesPage;
  let fixture: ComponentFixture<VerclientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerclientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
