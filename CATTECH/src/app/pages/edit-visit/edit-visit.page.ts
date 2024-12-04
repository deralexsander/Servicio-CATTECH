import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VisitasService } from 'src/app/services/visitas.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-visit',
  templateUrl: './edit-visit.page.html',
  styleUrls: ['./edit-visit.page.scss'],
})
export class EditVisitPage implements OnInit {
  visitaForm!: FormGroup;
  visitaId!: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly activatedRoute: ActivatedRoute,
    private readonly visitasService: VisitasService,
    private readonly toastController: ToastController
  ) {}

  ngOnInit() {
    this.visitaId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.visitaForm = this.fb.group({
      cliente: ['', Validators.required],
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      direccion: ['', Validators.required],
      motivo: ['', Validators.required],
      estado: ['', Validators.required] // Agregado el control de estado
    });

    this.loadVisita();
  }

  async loadVisita() {
    try {
      const visita = await firstValueFrom(this.visitasService.getVisitaPorId(this.visitaId));
      if (visita) {
        this.visitaForm.patchValue(visita);
      }
    } catch (error) {
      console.error('Error al cargar la visita:', error);
    }
  }

  async onSubmit() {
    if (this.visitaForm.valid) {
      try {
        await this.visitasService.updateVisita(this.visitaId, this.visitaForm.value);
        const toast = await this.toastController.create({
          message: 'Visita actualizada correctamente.',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
      } catch (error) {
        console.error('Error al actualizar la visita:', error);
        const toast = await this.toastController.create({
          message: 'Hubo un error al actualizar la visita. Intenta nuevamente.',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }
    }
  }
}
