import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditVisitPage } from './edit-visit.page';

describe('EditVisitPage', () => {
  let component: EditVisitPage;
  let fixture: ComponentFixture<EditVisitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
