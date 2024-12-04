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
      estado: ['', Validators.required], // Agregado el control de estado
      correo: ['', [Validators.required, Validators.email]] // Validación de correo electrónico
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

  enviarCorreo() {
    const cliente = this.visitaForm.get('cliente')?.value;
    const correo = this.visitaForm.get('correo')?.value; // Corregido el nombre del campo para coincidir
    const asunto = 'Detalles de la visita';
    const cuerpo = `
      Cliente: ${cliente}
      Fecha: ${this.visitaForm.get('fecha')?.value}
      Hora: ${this.visitaForm.get('hora')?.value}
      Dirección: ${this.visitaForm.get('direccion')?.value}
      Motivo: ${this.visitaForm.get('motivo')?.value}
      Estado: ${this.visitaForm.get('estado')?.value}
    `;

    // Verifica si el correo electrónico es válido antes de abrir mailto
    if (correo) {
      window.location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    } else {
      console.error('El correo electrónico no está especificado');
      // Agrega un manejo de errores adecuado si el correo no está disponible
      const toast = this.toastController.create({
        message: 'El correo electrónico no está especificado. Por favor, verifica los datos.',
        duration: 2000,
        color: 'danger'
      });
      toast.then(toast => toast.present());
    }
  }
}
