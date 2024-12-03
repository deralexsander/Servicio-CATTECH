import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { Servicio } from 'src/app/clases/servicio';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { VisitasService } from 'src/app/services/visitas.service';
import { ToastController } from '@ionic/angular'; // Importa el ToastController

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
  visitaForm!: FormGroup;
  imagenes: string[] = [];
  maxImages = 5;

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private visitasService: VisitasService,
    private toastController: ToastController // Inyecta el ToastController
  ) {}

  ngOnInit() {
    this.visitaForm = this.fb.group({
      cliente: ['', Validators.required],
      titulo: ['', Validators.required], // Asegúrate de que el campo 'titulo' sea requerido
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      direccion: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  }

  get cliente() { return this.visitaForm.get('cliente'); }
  get titulo() { return this.visitaForm.get('titulo'); }
  get fecha() { return this.visitaForm.get('fecha'); }
  get hora() { return this.visitaForm.get('hora'); }
  get direccion() { return this.visitaForm.get('direccion'); }
  get motivo() { return this.visitaForm.get('motivo'); }

  async onSubmit() {
    if (this.visitaForm.valid) {
      const visita = this.visitaForm.value;
      visita.imagenes = this.imagenes;

      try {
        await this.visitasService.addVisita(visita);
        console.log('Visita guardada con éxito');

        // Muestra un mensaje de confirmación
        const toast = await this.toastController.create({
          message: 'Enviado correctamente.',
          duration: 2000,
          color: 'success'
        });
        await toast.present();

        // Resetea el formulario y limpia las imágenes
        this.visitaForm.reset();
        this.imagenes = [];
      } catch (error) {
        console.error('Error al guardar la visita:', error);

        // Muestra un mensaje de error
        const toast = await this.toastController.create({
          message: 'Hubo un error al enviar. Intenta nuevamente.',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }
    }
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      console.log('Imagen capturada:', image.webPath);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
}
