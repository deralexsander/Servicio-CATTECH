import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialPage } from './historial.page';
import { IonicModule } from '@ionic/angular';

describe('HistorialPage', () => {
  let component: HistorialPage;
  let fixture: ComponentFixture<HistorialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
