import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruenasPage } from './pruenas.page';

describe('PruenasPage', () => {
  let component: PruenasPage;
  let fixture: ComponentFixture<PruenasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
