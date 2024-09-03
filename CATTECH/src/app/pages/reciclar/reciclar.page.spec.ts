import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReciclarPage } from './reciclar.page';

describe('ReciclarPage', () => {
  let component: ReciclarPage;
  let fixture: ComponentFixture<ReciclarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciclarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
