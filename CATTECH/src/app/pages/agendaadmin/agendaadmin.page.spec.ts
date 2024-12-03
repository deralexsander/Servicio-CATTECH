import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaadminPage } from './agendaadmin.page';

describe('AgendaadminPage', () => {
  let component: AgendaadminPage;
  let fixture: ComponentFixture<AgendaadminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
