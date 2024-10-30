import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { Servicio } from 'src/app/clases/servicio';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
  visitaForm!: FormGroup;
  imagenes: File[] = [];
  maxImages = 5;

  constructor(private fb: FormBuilder, private databaseService: DatabaseService) {}

  ngOnInit() {
    this.visitaForm = this.fb.group({
      cliente: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      direccion: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  }

  get cliente() { return this.visitaForm.get('cliente'); }
  get fecha() { return this.visitaForm.get('fecha'); }
  get hora() { return this.visitaForm.get('hora'); }
  get direccion() { return this.visitaForm.get('direccion'); }
  get motivo() { return this.visitaForm.get('motivo'); }

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files.length > this.maxImages) {
      alert(`Solo puedes subir hasta ${this.maxImages} imágenes.`);
      return;
    }
    this.imagenes = Array.from(files);
  }

  async onSubmit() {
    if (this.visitaForm.valid && this.imagenes.length <= this.maxImages) {
      const visitaData = this.visitaForm.value;

      // Crear objeto `Servicio` con los datos del formulario
      const nuevoServicio: Servicio = {
        fecha: visitaData.fecha,
        hora: visitaData.hora,
        motivo: visitaData.motivo,
        direccion: visitaData.direccion,
        imagenes: '', // Se actualizará en `addServicioConImagen`
        nombre_dispositivo: 'Dispositivo Ejemplo', // Asigna el nombre del dispositivo
        estado_servicio: 'Pendiente', // Estado inicial
        tipo_servicio: 'Mantenimiento', // Tipo de servicio
        cliente_id: Number(visitaData.cliente) // ID del cliente
      };

      // Llama a `addServicioConImagen` en `DatabaseService` para guardar el servicio y la imagen
      await this.databaseService.addServicioConImagen(nuevoServicio);
      console.log('Visita agendada:', visitaData);
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

      // Aquí puedes usar 'image.webPath' o 'image.path' para mostrar la imagen o guardarla
      console.log('Imagen capturada:', image.webPath);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
}
